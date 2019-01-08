var DappToken = artifacts.require("./DappToken.sol");// provides an abstraction of the contract that truffle can use to run in a js environment
var DappTokenSale=artifacts.require("./DappTokenSale.sol")
module.exports = function(deployer) {
  deployer.deploy(DappToken, 1000000).then(function() { // subsequent arguments are passed to constructor
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(DappTokenSale, DappToken.address, tokenPrice);

});
};
