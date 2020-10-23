'use strict';

// url is your FuelStop project URL, and privateKey is for the address we just
// created and you just added into your project
const [, , url, privateKey] = process.argv;

const Web3 = require('web3');
const { bytecode } = require('./build/contracts/FuelStopToken');

const web3 = new Web3(url);
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

async function main() {
  const transaction = {
    from: account.address,
    data: bytecode,
  };

  // the 'pending' argument is necessary when
  // frequently sending transactions  (more than one per block) to FuelStop.io
  const nonce = await web3.eth.getTransactionCount(account.address, 'pending');
  const gasLimit = await web3.eth.estimateGas(transaction);
  const gasPrice = await web3.eth.getGasPrice();
  const chainId = await web3.eth.getChainId();

  const { rawTransaction } = await account.signTransaction({
    ...transaction,
    nonce,
    gasLimit,
    gasPrice,
    chainId,
  });

  const { contractAddress } = await web3.eth
    .sendSignedTransaction(rawTransaction)
    .once('transactionHash', hash => {
      console.log(`transaction hash: ${hash}`);
    });

  console.log(`contract address: ${contractAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
