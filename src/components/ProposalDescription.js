import React from 'react';
import {ProgressBar} from 'react-bootstrap';


const ProposalDescription = (props) => {
    return(
        <div className="container proposal-box">
            <strong>MGP 35—$10,000 for Tornado Cash Trusted Setup</strong>
            <br/>
            <p className="font-weight-light">e href attribute requires a valid value to 
            be accessible. Provide a valid, navigable address as the </p>
            <br/>
            <hr/>
            <div className="text-center">
                <h4>Tribute</h4>
                <h1 style={{fontSize: "3em"}}>0.00</h1>
            </div>
            <div className="voting-duration-box align-center">
                Voting ends: 2 days
            </div>
            <div className="row mt-1">
                <ProgressBar />
            </div>
            {/* TODO add progress bar etc */}
        </div>
    );
}

export default ProposalDescription;