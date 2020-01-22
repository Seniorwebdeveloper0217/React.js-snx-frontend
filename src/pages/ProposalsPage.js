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
        //console.log(this.props.data)
        console.log(this.props);
        var web3 = this.props.web3;
        console.log(web3);
        // this.getProposals();
        var contract = new web3.eth.Contract(GrantsDAO.abi, contract_config.GrantsDAO_dev);
        //var contractData = await trsContract.methods.getContractInfo(this.props.match.params.contractID).call()
        //console.log(contractData)
    }


    getProposals = async () => {
        var web3 = this.props.web3;
        var contract = new web3.eth.Contract(GrantsDAO.abi, contract_config.GrantsDAO_dev);
        console.log(contract.methods);

        await contract.methods.proposals().call().then(async (proposals) => {
            var proposal;
            for (var i = 0; i < proposals; i++) {
                proposal = await contract.methods.getContractID(i).call();
            }
        //   console.log(contractCounter)
        //   var contractAddress;
        //   var offerExpiryTime;
        //   for (var i = 0; i < contractCounter; i++) {
        //     contractAddress = await contract.methods.getContractID(i).call();
        //     offerExpiryTime = await contract.methods.getContractExpiryTime(contractAddress).call();
        //     console.log(offerExpiryTime)
        //     contract.methods.getContractByIndex(i).call((err, res) => {
        //       if (res[0] === "0x0000000000000000000000000000000000000000") {
        //         var status;
        //         if (contract.methods.getContractID(i).call()) {
        //           status = "Active"
        //         } else {
        //           status = "Expired"
        //         }
        //         var thisData = {
        //           id: i,
        //           address: contractAddress,
        //           originalPrice: res[2],
        //           startDate: res[3],
        //           expiryDate: res[4],
        //           interestRate: res[5],
        //           amountOfLink: res[6],
        //           status: status,
        //           offerExpiry: offerExpiryTime,
        //           minMargin: res[9]
        //         }
        //         var currentTime = Math.round((new Date()).getTime() / 1000);
        //         if (offerExpiryTime - currentTime > 0) {
        //           listings.push(thisData)
        //         }
        //       }
        //     });
        //   }
        //   console.log(listings)
        //   this.setState({ data: listings },
        //     () => {
        //       this.setState({ loading: false })
        //     })
        })
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