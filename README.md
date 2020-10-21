# FuelStop

## Getting Started

#### Projects

After sign up, you will have 2 projects, one for each Ethereum network.  You can find your projects by clicking on the menu icon on the top-left corner on the page. One project is for Mainnet and the other is for Ropsten (a proof-of-work Ethereum testnet). Clicking on any of the projects will bring you to it's project details page.

![menu](./diagrams/projects.svg)

#### Project Details

The project details page includes the project's balance, registered addresses, transaction history, account history, and unique JSON-RPC url containing the Project ID which is used to authenticate your API calls.

###### Balance

This section is where you can add your credit card with FuelStop, and after which displays information about the account associated with the project. The Mainnet project would start without credit card added, and therefore you have to add one before we can fund your transactions. The Ropsten project, however, is with a testnet of Ethereum, and does not require you to add any credit card to start using. It comes with a fake credit card, and you can top it up anytime you want by clicking on the "Top Up Button" with no cost. This is where you can test your system or library with FuelStop.

![Balance without credit card](./diagrams/balance-without-credit-card.svg)

![FuelStop Documentation](./diagrams/balance.svg)

###### Details

Here you can find the name of the network the project is associated with, and your RPC URL. FuelStop's Ethereum JSON-RPC APIs require a valid project ID to be part of your URL to authenticate the calls. This is how we identify who you are behind the API requests, and it is important to keep it a secret.

![Details](./diagrams/details.svg)

###### Addresses

Before sending your signed transactions to us via `eth_sendRawTransaction`, you need to register your address with us. If you send FuelStop a signed transaction via your RPC URL that is not included in your registered addresses, FuelStop will behave no differently than a regular Ethereum node and will broadcast it to the network. If your address has some ETH but not enough to cover the transaction's fees, FuelStop will fund your address with the exact amount needed for the transaction to go through.

![Addresses](./diagrams/addresses.svg)

###### Transactions

The transactions table contains your transaction history. You can periodically refresh it to monitor the status of your transactions. A transaction's status will be one of the following:

1. `New`: The transaction has been received and is waiting for the fund transaction to be mined.
2. `Sent`: The transaction has been broadcasted to the network and is waiting to be mined.
3. `Confirmed`: The transaction has been mined in a block and transaction execution is successful on-chain.
4. `Failed`: The transaction has been mined in a block and transaction execution has failed on-chain. This is likely because you sent your transaction to a smart contract, and part of the contract logic has rejected a state transition.

![Transactions](./diagrams/transactions.svg)

###### Account History

The Account History table displays your account balance change history.

![Account History](./diagrams/account-history.svg)

#### Using FuelStop's RPC URL

FuelStop supports all [standard Ethereum JSON-RPC APIs](https://eth.wiki/json-rpc/API), which means it is able to work seemlessly with popular libraries such as [web3.js](https://github.com/ethereum/web3.js/) and [ethers.js](https://github.com/ethers-io/ethers.js/), and tools such as [Metamask](https://metamask.io/) and [Remix Ethereum IDE](https://remix.ethereum.org/).

###### web3.js

```javascript
const Web3 = require('web3');
const web3 = new Web3(url); // url is your FuelStop project RPC URL
```

###### ethers.js

```javascript
const ethers = require('ethers');
const provider = new ethers.providers.JsonRpcProvider(url); // url is your FuelStop project RPC URL
```

###### Metamask

To connect Fuelstop to Metamask
1. Go to `Settings` -> `Networks` -> `Add Network`
2. Fill in the "Network Name" of your choice
3. Add your FuelStop RPC URL

![Metamask](./diagrams/metamask.svg)

If you register a address to Fuelstop that is associated with one of your Metmask accounts, you may notice that that the ETH balance shown in Metamask is not equal to its actual balance on the Ethereum network. This is because FuelStop intercepts the RPC calls that Metamask uses to query your balance. When FuelStop sees a call querying for a balance of a registered address it will give back your `actual ETH balance` + `the equivalent ETH amount of your FuelStop project balance`. This allows Metamask to work with FuelStop seamlessly when it comes to sending transactions, and is useful for you to continue using Metamask to monitor your "ETH" balance.

![Metamask Balance](./diagrams/metamask-balance.svg)

###### Remix Ethereum IDE

To connect the Remix Ethereum IDE with FuelStop, you will need to either follow the Metamask section to connect it with Metamask first and then select "Injected Web3" in the Remix IDE, or you can select "Web3 Provider" and enter your FuelStop RPC URL.

![Remix](./diagrams/remix.svg)
