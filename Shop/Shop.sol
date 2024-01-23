// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./lock.sol";

contract buyer {
   Shop public shop;

   constructor(Shop _shop) public {

    shop =_shop;
   }

   function buy( ) public {
    shop.buy();
   }

   function price( ) public view returns(uint) {
    if(shop.isSold() ){

    return 0;
    }
    return 100;
   }
}
