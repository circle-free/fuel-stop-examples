# FuelStop Example

The goal of this example is to demonstrate how to deploy an ERC20 smart contract with [web3.js](https://github.com/ethereum/web3.js/), [ethers.js](https://github.com/ethers-io/ethers.js/), and [Truffle](https://github.com/trufflesuite/truffle) via [FuelStop.io](https://fuelstop.io), with an account that _does not hold any ether_. [FuelStop.io](https://fuelstop.io) supports all standard JSON-RPC calls of Ethereum, so all these libraries work seamlessly with it.

**Nice-to-have Prior Knowledge**

- [Basic understanding of Ethereum and Smart Contract](https://ethereum.org/en/developers/docs/)
- [Standard JSON-RPC API of Ethereum nodes](https://eth.wiki/json-rpc/API)
- [Some familiarity with Solidity, which is the language we use for writing our sample smart contract](https://solidity.readthedocs.io/en/latest/)

You may run any of the following scripts to try deploying our sample ERC20 from **ANY** account you'd like!

- web3.js: `npm run deploy-with-web3`
- ethers.js: `npm run deploy-with-ethers`
- truffle: `npm run deploy-with-truffle`
