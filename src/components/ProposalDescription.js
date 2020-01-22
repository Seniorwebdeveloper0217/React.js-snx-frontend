import React from 'react';
import {ProgressBar} from 'react-bootstrap';


const ProposalDescription = (props) => {
    return(
        <div className="container proposal-box">
            <div className="row mx-3">
                <strong>MGP 35—$10,000 for Tornado Cash Trusted Setup</strong>
                <br/>
                <p className="font-weight-light">e href attribute requires a valid value to 
                be accessible. Provide a valid, navigable address as the </p>
                <br/>
                <hr/>
            </div>
            <div className="text-center">
                <h4>Tribute</h4>
                <h1 style={{fontSize: "3em"}}>0.00</h1>
            </div>
            <div className="voting-duration-box align-center">
                Voting ends: 2 days
            </div>
            <div className="align-center mt-3 mx-3">
                <ProgressBar variant="success" now={40}/>
            </div>
            <div className="row text-center mt-2">
                <div className="col-md-6">
                    <p>32 Signatures</p>
                </div>
                <div className="col-md-6">
                    <p>87 Required</p>
                </div>
            </div>
            {/* TODO add progress bar etc */}
        </div>
    );
}

export default ProposalDescription;