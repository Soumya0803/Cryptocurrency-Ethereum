var DappToken = artifacts.require("./DappToken.sol");// provides an abstraction of the contract that truffle can use to run in a js environment

module.exports = function(deployer) {
  deployer.deploy(DappToken,1000000);//subsequent argument will be passed to constructor
};
