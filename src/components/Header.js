import React, {Component} from "react";
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

import "../styles/Header.css";

class Header extends Component {

    render() {
        return (
            <div className = "row col-md-12">
            <div className="col-md-2 socialicon">
                <SocialIcon  url="https://twitter.com/jaketrent" />
                <SocialIcon  url="https://facebook.com/jaketrent" />
                <SocialIcon  url="https://discord.com/jaketrent" />
            </div>
            <div className="col-md-7">
                <nav className="navbar navbar-expand-lg">
                    <a className = "title" href ="/">
                        <img src = "images/title.png" />
                    </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            
                            <li className="nav-item dropdown fixed-right">
                                <a className="nav-link dropdown-toggle buttonstyle" href="/" id="navbardrop" role="button" data-toggle="dropdown">
                                    Web3 Login
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/">Action</a>
                                    <a className="dropdown-item" href="/">Another action</a>
                                    <a className="dropdown-item" href="/">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            </div>
        )
    }
}

export default Header;
