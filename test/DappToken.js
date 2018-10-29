var DappToken = artifacts.require("./DappToken.sol");

 contract('DappToken', function(accounts){
var tokenInstance;
  it('sets the total supply upon deployment',function(){
    return DappToken.deployed().then(function(instance){
      tokenInstance= instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply){
      assert.equal(totalSupply.toNumber(),1000000,'set the total no. to 100000');
    });
  });

})
