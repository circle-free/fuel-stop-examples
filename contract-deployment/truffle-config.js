'use strict';

const fs = require('fs');
const PrivateKeyProvider = require('truffle-privatekey-provider');

const TEMP_FILE = 'temp';

const getNetwork = () => {
  if (fs.existsSync(TEMP_FILE)) {
    const [url, privatekey] = fs
      .readFileSync('temp', { encoding: 'utf-8' })
      .split(' ');

    return {
      provider: new PrivateKeyProvider(privatekey, url),
      network_id: '*',
    }
  }

  return {
    host: "127.0.0.1",
    port: 8545,
    network_id: "*"
  }
}


module.exports = {
  networks: {
    fuelStop: getNetwork(),
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
