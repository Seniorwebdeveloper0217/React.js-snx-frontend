import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import { Grid, Icon, Dropdown, Form, Button, Loader} from "semantic-ui-react";

const Header = () => {

    return (
        <div id="header">
            <Grid
                container
                columns={3}
                stackable
                verticalAlign="middle">
                <Grid.Column textAlign="center">
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Icon name="discourse" size="big"/>
                    </a>
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Icon name="twitter" size="big"/>
                    </a>
                </Grid.Column>
                <Grid.Column textAlign="center" className="logo">
                    <Router>
                        <Link to="/">Syntetix</Link>
                    </Router>
                </Grid.Column>
                <Grid.Column textAlign="center" className="dropdown">
                    <Dropdown
                        className="right_dropdown"
                        text={"Web3 Login"}>
                        <Dropdown.Menu className="menu blurred" direction="left">
                            {}</Dropdown.Menu>
                    </Dropdown>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Header;