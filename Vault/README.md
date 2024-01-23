
# Ethereum Contract Unlocker App

This React application allows users to interact with an Ethereum smart contract by unlocking it using a password stored in the contract's storage. The application utilizes the MetaMask Web3Provider to connect to the Ethereum blockchain and the ethers library for Ethereum interactions.

## Getting Started
Contract Source Code:
```
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CTF1 {
  bool public locked;
  bytes32 private password;
  event Winner(address);

  constructor(bytes32 _password) {
    locked = true;
    password = _password;
  }

  function unlock(bytes32 _password) public {
    if (password == _password) {
      locked = false;
      emit Winner(msg.sender);
    }
  }
}
```

1. How to Access The App?
- Visit the given link.

  ```sh
   https://ctf-1-smoky.vercel.app/
   ```

## Usage

1. Make sure you have MetaMask installed and connected to the Ethereum network using Initialize Ethereum.

2. Click the "Unlock" button to initiate the unlocking process.

## Configuration

- Update the smart contract address and ABI in the `App.js` file to match your specific contract details:

  ```javascript
  const contract_address = `0x89d5b48f3974A05b4BF816aebA12D401c0ebb003`;
  const slot = 1; // Modify this according to your contract storage structure.
  ```

- Ensure MetaMask is configured with the correct network and account.

## Result
```sh
https://goerli.etherscan.io/tx/0xd6b3aa5e20e7d1ff32513b82114305d3f5a520394ae97357a8f1e5f5c28dbc6b
```

