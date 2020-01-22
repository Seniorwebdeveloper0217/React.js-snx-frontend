import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MembersPage from "./pages/MembersPage";
import ProposalsPage from "./pages/ProposalsPage";
import ProposalDetailPage from "./pages/ProposalDetailPage";
import PoolPage from "./pages/PoolPage";
import Header from "./components/Header"
import {getLocalWeb3} from './utils/getWeb3'
import { PulseLoader } from 'react-spinners';




import "./App.css"





class App extends Component {
  state = {
    web3: null,
    loadError: false, loading: true,
    showWelcomeMessage: false
  };
  
  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getLocalWeb3();
      console.log("app", web3)
      this.setState({ loading :false, web3: web3 })
  
    } catch (error) {
      // alert(
      //   `Failed to load web3, accounts, or contract. Check console for details.`,
      // );
      this.setState({ loadError: true, loading: false })
      console.error(error);
    }
  }
  
  render() {
    if (this.state.loading === true) {
      return (
        <PulseLoader
          sizeUnit={"px"}
          size={5}
          color={'#2A2B2A'}
          loading={this.state.showLoader}
        />
    )} else {
      return(
        <div className="container-fluid background-colour vh-100">
          <Header/>
          <BrowserRouter>
            <Route exact path="/" render={(props) => {
                  return (<HomePage {...props} web3={this.state.web3} />)
                }} />
            <Route exact path="/members" render={(props) => {
                  return (<MembersPage {...props} web3={this.state.web3} />)
                }} />
            <Route exact path="/proposals" render={(props) => {
                  return (<ProposalsPage {...props} web3={this.state.web3} />)
                }} />
            <Route exact path="/proposalDetails" render={(props) => {
                  return (<ProposalDetailPage {...props} web3={this.state.web3} />)
                }} />
            <Route exact path="/pool" render={(props) => {
                  return (<PoolPage {...props} web3={this.state.web3} />)
                }} />
          </BrowserRouter>
        </div>
        )
    }
  }
}

export default App;
