# FuelStop

## Getting Started

### Projects

After sign up, you can find your projects by clicking on the menu icon on the top-left corner of the page. One project is for the Ethereum Mainnet and the other is for Ropsten (this is the only testnet that's currently supported). Clicking on either of the projects will bring you to its details page.

![menu](./diagrams/projects.svg)

### Project Details

The `Project Details` page includes the project's balance, registered addresses, transaction history, account history, and the unique JSON-RPC URL containing the Project ID which is used to authenticate your API calls.

#### Balance

The `Balance` section is where you can add your credit card to your FuelStop account. After the card is added, its info is displayed. You can also remove a card once it has been added. The `Mainnet` project starts without credit-card so, you have to add one before your transactions can be paid for. The `Ropsten` project, however, has a test-card already registered that cannot be removed. Feel free to hit `Top up` as much as you want with this project, you won't be charged.

![Balance without credit card](./diagrams/balance-without-credit-card.svg)

![FuelStop Documentation](./diagrams/balance.svg)

#### Details

Here, you can find the name of the network and your RPC URL. FuelStop's Ethereum JSON-RPC APIs require a valid project ID to be part of your URL to authenticate the calls. Do not share the URL.

![Details](./diagrams/details.svg)

#### Addresses

Before sending your signed transactions (via the JSON-RPC `eth_sendRawTransaction` method or with a client-library), you need to register your addresses. If you send FuelStop a signed transaction that is not included in your address-list, FuelStop will behave no differently than a regular Ethereum node and will broadcast it to the network. If your address has some ETH but not enough to cover the transaction's fees, FuelStop will fund your address so that the transaction can go through.

![Addresses](./diagrams/addresses.svg)

#### Transactions

The `Transactions` table contains your transaction history. You can periodically refresh it to monitor the status of your transactions. A transaction's status will be one of the following:

1. `Pending`: The transaction has been received and is queued to be sent out once the address has been funded.
2. `Sent`: The transaction has been broadcasted to the network and is waiting to be mined.
3. `Confirmed`: The transaction has been mined in a block and transaction execution is successful on-chain.
4. `Failed`: The transaction has been mined in a block and transaction execution has failed on-chain. This is likely because you sent your transaction to a smart contract, and part of the contract logic has errored out.

![Transactions](./diagrams/transactions.svg)

#### Account History

The Account History table displays your account's balance-changes.

![Account History](./diagrams/account-history.svg)

### Using FuelStop's RPC URL

FuelStop supports all [standard Ethereum JSON-RPC APIs](https://eth.wiki/json-rpc/API), which means it's able to work seemlessly with popular libraries such as [web3.js](https://github.com/ethereum/web3.js/) and [ethers.js](https://github.com/ethers-io/ethers.js/), and tools such as [MetaMask](https://metamask.io/) and [Remix Ethereum IDE](https://remix.ethereum.org/).

#### web3.js

```javascript
const Web3 = require('web3');
const web3 = new Web3(url); // url is your FuelStop project RPC URL
```	

#### ethers.js	

```javascript	
const ethers = require('ethers');	
const provider = new ethers.providers.JsonRpcProvider(url); // url is your FuelStop project RPC URL	
```	

#### MetaMask	

To connect Fuelstop to Metamask	
1. Go to `Settings` -> `Networks` -> `Add Network`	
2. Fill in the "Network Name" of your choice	
3. Add your FuelStop RPC URL	

![MetaMask](./diagrams/metamask.svg)	

If you register one of your MetaMask addresses with a Fuelstop project, you may notice that that the ETH balance shown in MetaMask is higher than the actual balance on the Ethereum network. Instead, the amount is the `actual ETH balance` + `the equivalent ETH amount of your FuelStop project balance`. This allows MetaMask to work seamlessly with FuelStop even when your MetaMask address has no balance.	

![Metamask Balance](./diagrams/metamask-balance.svg)	

#### Remix Ethereum IDE

To connect FuelStop to the Remix Ethereum IDE, navigate the `DEPLOY & RUN TRANSACTIONS`. In the `ENVIRONMENT` dropdown, you can either select "Web3 Provider" and enter your Fuelstop RPC-URL **OR** you can connect FuelStop to MetaMask (following the section above) then select "Injected Web3" in the Remix IDE.

![Remix](./diagrams/remix.svg)
