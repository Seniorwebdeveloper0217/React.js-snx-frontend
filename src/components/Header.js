import React, {Component} from "react";
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

import "../styles/Header.css";

class Header extends Component {

    render() {
        return (
            <div className = "header">
            <div className="socialicon">
                <SocialIcon  url="https://twitter.com/jaketrent" />
                <SocialIcon  url="https://facebook.com/jaketrent" />
                <SocialIcon  url="https://discord.com/jaketrent" />
            </div>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className = "title" href ="/">
                        <img src = "images/title.png" />
                    </a>
                    <a className="navbar-brand brandimage" href="/">
                        <img src = "images/Spartans-SNX.png" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                        <li className="nav-item dropdown fixed-right">
                            <a className="nav-link dropdown-toggle buttonstyle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Web3 Login
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
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
