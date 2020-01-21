import Web3 from "web3";

let web3
let token

export async function initMetmask() {
  if (!window.ethereum && !window.web3) {
    // Non-DApp browsers won't work.
    alert("Metamask needs to be installed and configured.");
  }
  if (window.ethereum) {
    // Modern DApp browsers need to enable Metamask access.
    try {
      await window.ethereum.enable()
    } catch (error) {
      alert("Metamask needs to be enabled.")
    }
  }
  web3 = new Web3(Web3.givenProvider)
  localStorage.setItem("loginType", "metamask");
  return web3
}

export async function initToken() {
  if (!web3) {
    if (localStorage.getItem("loginType") === "metamask") {
      web3 = await initMetmask()
    } else if (localStorage.getItem("loginType") === "gnosis") {
      web3 = await initGnosisSafe()
    } else {
      throw new Error("Not logged in with web3.")
    }
  }
  token = new web3.eth.Contract(erc20Abi, process.env.REACT_APP_TOKEN_ADDRESS)
  return token
}

