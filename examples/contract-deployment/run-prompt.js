'use strict';

const fs = require('fs');
const util = require('util');
const readline = require('readline');
const { resolve } = require('path');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const Web3 = require('web3');
const BigNumber = require('bignumber.js');

const writeFile = util.promisify(fs.writeFile);

const askForUrl = () =>
  new Promise(resolve =>
    rl.question('Please enter your FuelStop project URL: ', resolve),
  );

const waitForAddressToBeAdded = (web3, address) =>
  new Promise((resolve, reject) => {
    const interval = setInterval(
      () =>
        web3.eth
          .getBalance(address)
          .then(BigNumber)
          .then(balance => {
            if (balance.lte(0)) return;

            clearInterval(interval);
            resolve();
          })
          .catch(reject),
      5000,
    );
  });

askForUrl()
  .then(async url => {
    const web3 = new Web3(url);
    const { address, privateKey } = web3.eth.accounts.create();

    console.log(
      `Please add address ${address} to your FuelStop project so that we can continue`,
    );
    await waitForAddressToBeAdded(web3, address);
    console.log(
      'Address is added, and we are ready to deploy the smart contract!',
    );

    return writeFile('temp', `${url} ${privateKey}`);
  })
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
