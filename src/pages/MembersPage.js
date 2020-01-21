import React, {Component} from 'react';
import Header from "../components/Header"

class MembersPage extends Component {
    state= {

    }
    render() {
        return(
            <div className="container-fluid background-colour vh-100">
                <Header/>
                <div className="container">
                    <br/>
                    <br/>
                    <p className="font-weight-light">73 Members</p>
                    <br/>
                    <br/>
                    <p className="font-weight-bolder">100+ Spartans</p>
                    <hr/>
                </div>


            </div>
        );
    }
}

export default MembersPage