import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MembersPage from "./pages/MembersPage";
import ProposalsPage from "./pages/ProposalsPage";
import ProposalDetailPage from "./pages/ProposalDetailPage";
import Header from "./components/Header"
import getWeb3 from './utils/getWeb3'
state = {
  web3: null,
  loadError: false, loading: true,
  showWelcomeMessage: false
};

componentDidMount = async () => {
  try {
    // Get network provider and web3 instance.
    const web3 = await getWeb3();
    //this.setState({ loading :false, web3: web3 })
    // const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    // web3.eth.getAccounts().then(console.log);
    //const ethers = getEthers(web3)
    // console.log(ethers)
    // console.log(ethers.getDefaultProvider)
    this.setState({ loading :false, web3: web3 })

  } catch (error) {
    // Catch any errors for any of the above operations.
    // alert(
    //   `Failed to load web3, accounts, or contract. Check console for details.`,
    // );
    this.setState({ loadError: true, loading: false })
    console.error(error);
  }
}


import "./App.css"





class App extends Component {
  
  render() {
    return(
      <div className="container-fluid background-colour vh-100">
        <Header/>
        <BrowserRouter>
          <Route exact path = '/' component={HomePage} />
          <Route exact path = '/members' component={MembersPage} />
          <Route exact path = '/proposals' component={ProposalsPage} />
          <Route exact path = '/proposalDetails' component={ProposalDetailPage} />
        </BrowserRouter>
      </div>
      )
  }
}

export default App;
