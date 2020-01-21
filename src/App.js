import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {Dimmer, Loader, Grid} from "semantic-ui-react";
import { ToastMessage } from "rimble-ui";
// import { ApolloProvider } from "react-apollo";

import HomePage from './pages/HomePage';
import MembersPage from "./pages/MembersPage";
import ProposalsPage from "./pages/ProposalsPage";
import ProposalDetailPage from "./pages/ProposalDetailPage";
import Header from "./components/Header"

import Wrapper from "./components/Wrapper";
import Background from "./components/Background";

import 'semantic-ui-css/semantic.min.css'
import "./styles/index.scss"
import "./styles/style_1.css"

class App extends Component {

    render() {
        return (
          <> 
            < Background /> 
            <Grid container>
                <Grid.Row>
                    <Header/>
                </Grid.Row>
                <Grid.Row>
                    <Wrapper>
                      <Router>
                        <Switch>
                            <Route exact path='/' component={HomePage}/>
                            <Route exact path='/members' component={MembersPage}/>
                            <Route exact path='/proposals' component={ProposalsPage}/>
                            <Route exact path='/proposalDetails' component={ProposalDetailPage}/>
                        </Switch>
                      </Router>
                    </Wrapper>
                </Grid.Row>
            </Grid>
            <ToastMessage.Provider ref={node => (window.toastProvider = node)}/>
          </>
        )
    }
}

export default App;
