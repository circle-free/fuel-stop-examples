'use strict';

const [, , url, privateKey] = process.argv;

const ethers = require('ethers');
const { bytecode } = require('./build/contracts/FuelStopToken');

const provider = new ethers.providers.JsonRpcProvider(url);
const wallet = new ethers.Wallet(privateKey);

async function main() {
  const transaction = {
    from: wallet.address,
    data: bytecode,
  };

  // the 'pending' argument is necessary when
  // frequently sending transactions  (more than one per block) to FuelStop.io
  const nonce = await provider.getTransactionCount(wallet.address, 'pending');
  const gasLimit = await provider.estimateGas(transaction);
  const gasPrice = await provider.getGasPrice();
  const network = await provider.getNetwork();

  const rawTransaction = await wallet.signTransaction({
    ...transaction,
    nonce,
    gasLimit,
    gasPrice,
    chainId: network.chainId,
  });

  const result = await provider.sendTransaction(rawTransaction);
  console.log(`transaction hash: ${result.hash}`);

  const { contractAddress } = await result.wait();
  console.log(`contract address: ${contractAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
