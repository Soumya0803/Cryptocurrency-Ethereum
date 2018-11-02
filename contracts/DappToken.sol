pragma solidity ^0.4.2;

contract DappToken{
  //erc20
  string public name = "DApp Token";
  string public symbol = "DAPP";
  string public standard = "DApp Token v1.0";

  uint256 public totalSupply;

  mapping( address => uint256) public balanceOf;

  //constructor
  //Set the total no. of tokens
    function DappToken (uint256 _initialSupply) public{

   //allocate initial supply, here first account is considered admministrator and all tkens assigned to it for testing
   balanceOf[msg.sender] = _initialSupply;
    totalSupply = _initialSupply;


  }

}
