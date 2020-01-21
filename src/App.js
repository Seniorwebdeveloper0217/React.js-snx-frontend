import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MembersPage from "./pages/MembersPage";
import ProposalsPage from "./pages/ProposalsPage";
import Header from "./components/Header"

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
        </BrowserRouter>
      </div>
      )
  }
}

export default App;
