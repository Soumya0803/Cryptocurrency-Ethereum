pragma solidity ^0.4.2;
import "./DappToken.sol";

contract DappToken{
  //erc20
  string public name = "DApp Token";
  string public symbol = "DAPP";
  string public standard = "DApp Token v1.0";
  uint256 public totalSupply;

  event Transfer(
       address indexed _from,
       address indexed _to,
       uint256 _value
   );
   event Approval(
           address indexed _owner,
           address indexed _spender,
           uint256 _value
       );
  mapping( address => uint256) public balanceOf;
  mapping(address => mapping(address => uint256)) public allowance;

  //constructor
  //Set the total no. of tokens
    function DappToken (uint256 _initialSupply) public{

   //allocate initial supply, here first account is considered admministrator and all tkens assigned to it for testing
   balanceOf[msg.sender] = _initialSupply;
    totalSupply = _initialSupply;


  }

  function transfer(address _to, uint256 _value) public returns (bool success) {
       require(balanceOf[msg.sender] >= _value);

       balanceOf[msg.sender] -= _value;
       balanceOf[_to] += _value;

       Transfer(msg.sender, _to, _value);

       return true;
   }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;

        Approval(msg.sender, _spender, _value);

        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_value <= balanceOf[_from]);
        require(_value <= allowance[_from][msg.sender]);

        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;

        allowance[_from][msg.sender] -= _value;

        Transfer(_from, _to, _value);

        return true;
    }


}
