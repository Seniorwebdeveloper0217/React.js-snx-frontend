import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MembersPage from "./pages/MembersPage";
import ProposalsPage from "./pages/ProposalsPage";
import ProposalDetailPage from "./pages/ProposalDetailPage";
import Header from "./components/Header"
import getWeb3 from './utils/getWeb3'



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
      const web3 = await getWeb3();
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
    return(
      <div className="container-fluid background-colour vh-100">
        <Header/>
        <Switch>
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
        </Switch>
      </div>
      )
  }
}

export default App;
