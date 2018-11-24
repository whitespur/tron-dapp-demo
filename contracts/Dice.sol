pragma solidity ^0.4.18;


// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts.

contract Dice {

    event LogS(string s);
    event LogA(address s);
    event Log(uint a);
    event RollResult(address addr, bool res);

    address owner;

    constructor() public {
        owner = msg.sender;
    }

    function roll() public payable {
        emit Log(msg.value);
        require(msg.value > 100);
        emit LogA(msg.sender);
        emit RollResult( msg.sender, true);

    }

}
