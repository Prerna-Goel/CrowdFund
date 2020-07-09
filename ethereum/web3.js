import Web3 from 'web3';

// const web3 = new Web3(window.ethereum);
//
// window.ethereum.enable();
let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //we are in the browser and metamask is running
  web3 = new Web3(window.ethereum);
  window.ethereum.enable();

} else {
  // we are on the browser *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/39d716c0b80b4e16bc1c09fd7aabaa32'
  );
  web3 = new Web3(provider);
}

export default web3;
