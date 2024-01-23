import React, { useState } from 'react';
import { ethers } from 'ethers';
import abi from './abi.json';

const App = () => {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const contractAddress = '0x89d5b48f3974A05b4BF816aebA12D401c0ebb003';
  const slot = 1;

  const initEthereum = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.enable();
        const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(web3Provider);

        const signer = web3Provider.getSigner();
        const contractInstance = new ethers.Contract(contractAddress, abi, signer);
        setContract(contractInstance);
      } else {
        console.error('MetaMask not detected');
      }
    } catch (error) {
      console.error('Error initializing Ethereum:', error);
    }
  };

  const getPassword = async () => {
    try {
      const data = await provider.getStorageAt(contractAddress, slot);
      return data;
    } catch (error) {
      console.error('Error getting password:', error);
    }
  };

  const unlock = async () => {
    try {
      await initEthereum(); // Ensure Ethereum is initialized before unlocking

      if (provider && contract) {
        const password = await getPassword();
        const unlockTx = await contract.unlock(password);
        await unlockTx.wait(); // Wait for transaction to be mined
        console.log('Contract unlocked successfully');
      } else {
        console.error('Ethereum or contract not initialized');
      }
    } catch (error) {
      console.error('Error unlocking contract:', error);
    }
  };

  return (
    <div className="container">
      <h1>Unlock the Contract</h1>

      <button onClick={initEthereum}>Initialize Ethereum</button>
      <button onClick={unlock} disabled={!provider || !contract}>
        Unlock
      </button>
    </div>
  );
};

export default App;
