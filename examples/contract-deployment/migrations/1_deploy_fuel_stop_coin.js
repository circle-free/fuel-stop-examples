// This is how you import and deploy a smart contract with truffle.
const FuelStopToken = artifacts.require('FuelStopToken');

module.exports = deployer => {
  deployer.deploy(FuelStopToken);
};
