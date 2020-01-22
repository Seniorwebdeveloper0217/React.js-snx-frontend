import React, { Component } from 'react';
import {Link} from "react-router-dom"
import ProposalDescription from "../components/ProposalDescription";
import "../styles/ProposalsPage.css";
import GrantsDAO from "../contracts/GrantsDAO";
import contract_config from "../contract_config.json";

class ProposalsPage extends Component {
    state = {
        isLoading: true
    }

    componentDidMount = async() => {
        console.log(this.props.data)
        var web3 = this.props.web3;
        console.log(web3);
        var contract = new web3.eth.Contract(GrantsDAO.abi, contract_config.GrantsDAO_dev);
        //var contractData = await trsContract.methods.getContractInfo(this.props.match.params.contractID).call()
        //console.log(contractData)
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
                    <div className="col-md-4">
                        <Link to="/proposalDetails">
                            <ProposalDescription/>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/proposalDetails">
                            <ProposalDescription/>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/proposalDetails">
                            <ProposalDescription/>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/proposalDetails">
                            <ProposalDescription/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProposalsPage;