'use strict';

const fs = require('fs');
const PrivateKeyProvider = require('truffle-privatekey-provider');

const [url, privatekey] = fs
  .readFileSync('temp', { encoding: 'utf-8' })
  .split(' ');

module.exports = {
  networks: {
    fuelStop: {
      provider: new PrivateKeyProvider(privatekey, url),
      network_id: '*',
    },
  },
  compilers: {
    solc: {
      version: '0.6.2',
      settings: {
        optimizer: {
          enabled: false,
          runs: 200,
        },
      },
    },
  },
};
