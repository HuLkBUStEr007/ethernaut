# Ethernaut Challenge 21: Shop - Solution Explanation

## Problem Description

The `lock.sol` file presents a simple smart contract named `Shop`. The contract has a vulnerability related to reentrancy. The `buy` function allows an external contract (`Buyer`) to call its `price` function, and if the price is sufficient, it updates the `isSold` flag and sets the price to the buyer's provided price.

### Issue:
1. The `Shop` contract has a vulnerability related to reentrancy.
2. The `buy` function allows an external contract to call its `price` function, leading to potential reentrancy attacks.

## Solution Approach

To solve this challenge, a separate contract named `buyer` is created in `shop.sol`. The `buyer` contract interacts with the `Shop` contract and manipulates the vulnerable logic.

### Solution Steps:
1. A new contract `buyer` is created, importing the `Shop` contract.
2. The `buyer` contract has a constructor that takes an instance of the `Shop` contract as a parameter.
3. The `buyer` contract calls the `buy` function of the `Shop` contract.
4. The `price` function in the `buyer` contract returns 0 if the `isSold` flag in the `Shop` contract is true; otherwise, it returns 100.

### Explanation:
The vulnerability in the original `Shop` contract allows reentrant calls. The `buyer` contract exploits this by calling the `buy` function of the `Shop` contract and manipulating the `price` function to return 0 when the item is already sold. This way, the `Shop` contract's state is altered without properly handling reentrancy, leading to a successful solution to the challenge.
