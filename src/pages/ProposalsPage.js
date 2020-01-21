import React, { Component } from 'react';
import {Link} from "react-router-dom"
import Header from "../components/Header";

class ProposalsPage extends Component {
    state = {
        isLoading: true
    }
    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <br/>
                <div class="d-flex flex-row-reverse">
                    <Link to="/proposals" className="main-btn">New Proposl</Link>
                </div>
                <div class="d-flex flex-row justify-content-center">
                    <h2 className="p-4">Voting Period (2)</h2>
                    <h2 className="p-4">Grace Period (2)</h2>
                    <h2 className="p-4">In Queue (2)</h2>
                    <h2 className="p-4">Completed (2)</h2>
                </div>
                <hr/>
                <div className="row">
                    
                </div>
            </div>
        )
    }
}

export default ProposalsPage;