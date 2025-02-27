// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.7;

import "hardhat/console.sol";

contract Counter {
    uint counter;

    event CounterInc(uint counter);

    function count() public  {
        counter ++;
        console.log("Now, counter is: ", counter);
        emit CounterInc(counter);
    }

    function getCount() public view returns(uint) {
        return counter;
    }
}