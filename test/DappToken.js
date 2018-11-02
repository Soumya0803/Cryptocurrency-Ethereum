var DappToken = artifacts.require("./DappToken.sol");

 contract('DappToken', function(accounts){
var tokenInstance;

it ('initializes the contract with correct values', function(){
  return DappToken.deployed().then(function(instance){
    tokenInstance=instance;
    return tokenInstance.name();
  }).then(function(name){
    assert.equal(name, 'DApp Token','has correct name');
    return tokenInstance.symbol();
  }).then(function(symbol){
    assert.equal(symbol, 'DAPP', 'has correct symbol')
    return tokenInstance.standard();
  }).then(function(standard){
    assert.equal(standard, 'DApp Token v1.0', 'has correct standard');
  });
  })
  it('transfers token ownership', function(){
    return DappToken.deployed().then(function(instance){
      tokenInstance=instance;
      //Test require statement first by ransferring something larger than the sender's balance
      return tokeInstance.transfer.call(accounts[1], 9999999999999999999);
    }).then(assert.fail).catch(function(errror){
      assert(error.message.indexOf('revert'>=0, 'error message must contain revert'))
    })
  });
  it('sets the initial supply upon deployment',function(){
    return DappToken.deployed().then(function(instance){
      tokenInstance= instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply){
      assert.equal(totalSupply.toNumber(),1000000,'set the total no. to 100000');
      return tokenInstance.balanceOf(accounts[0]);
    }).then(function(adminBalance){
      assert.equal(adminBalance.toNumber(),1000000,'it allocates initial supply to admin account')
    });
  });

})
