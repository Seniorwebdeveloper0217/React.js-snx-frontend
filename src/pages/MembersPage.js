import React, {Component} from 'react';
import Header from "../components/Header"
import "../styles/MembersPage.css"

class MembersPage extends Component {
    state= {

    }
    render() {
        return(
            <div className="container">
                <p className="snx-pink">73 Members</p>
                <p className="font-weight-bolder">100+ Spartans</p>
                <hr/>
                <div className = "row col-12 member-list">
                    <div className = "col-xs-4 col-sm-3 col-md-2 member">
                        <img src = "images/member.png"/> 
                        <p className = "address my-2">00xarssed</p>
                        <p className = "shares my-1">1000 shares</p>
                    </div>
                    <div className = "col-xs-4 col-sm-3 col-md-2 member">
                        <img src = "images/member.png"/> 
                        <p className = "address my-2">00xarssed</p>
                        <p className = "shares my-1">1000 shares</p>
                    </div>
                    <div className = "col-xs-4 col-sm-3 col-md-2 member">
                        <img src = "images/member.png"/> 
                        <p className = "address my-2">00xarssed</p>
                        <p className = "shares my-1">1000 shares</p>
                    </div>
                    <div className = "col-xs-4 col-sm-3 col-md-2 member">
                        <img src = "images/member.png"/> 
                        <p className = "address my-2">00xarssed</p>
                        <p className = "shares my-1">1000 shares</p>
                    </div>
                    <div className = "col-xs-4 col-sm-3 col-md-2 member">
                        <img src = "images/member.png"/> 
                        <p className = "address my-2">00xarssed</p>
                        <p className = "shares my-1">1000 shares</p>
                    </div>
                    <div className = "col-xs-4 col-sm-3 col-md-2 member">
                        <img src = "images/member.png"/> 
                        <p className = "address my-2">00xarssed</p>
                        <p className = "shares my-1">1000 shares</p>
                    </div>
                    <div className = "col-xs-4 col-sm-3 col-md-2 member">
                        <img src = "images/member.png"/> 
                        <p className = "address my-2">00xarssed</p>
                        <p className = "shares my-1">1000 shares</p>
                    </div>

                    <div className = "col-xs-4 col-sm-3 col-md-2 member">
                        <img src = "images/member.png"/> 
                        <p className = "address my-2">00xarssed</p>
                        <p className = "shares my-1">1000 shares</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default MembersPage