import React from "react";
import {Grid, Image, Divider} from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

// import MemberDetail from "./MemberDetail";
import bull from "./../assets/bull.png";
import hood from "./../assets/hood.png";

import ProfileHover from "profile-hover";

const MemberAvatar = ({address, shares}) => (
    <Grid.Column
        mobile={5}
        tablet={3}
        computer={3}
        textAlign="center"
        className="member_avatar"
        title={address}>
        <ProfileHover address={address} noTheme>
            <Router>
            <Link to={`/members/${address}`} className="uncolored">
                <Image src={hood} centered size="tiny"/>
                <p className="name">
                    {!address ? "": address.length > 10
                                ? address.substring(0, 10) + "..."
                                : address
                    }
                </p>
                <p className="subtext">{shares} shares</p>
            </Link>
            </Router>
        </ProfileHover>
    </Grid.Column>
);

const Elders = () => {
    var members = []
    var elder = {}
    for (var i = 1; i <= 50; i++) {
        elder.id = i
        elder.shares = 1000
        members.push(elder)
    }
    return members.length > 0
        ? (
            members.map((elder, idx) => (<MemberAvatar address={elder.id} shares={elder.shares} key={idx}/>))
        )
        : (<> No elders to show.</>);
};

const LoggedInUser = () => {

    return (
        <ProfileHover address={"loggedInUser"} noTheme>
            <Router>
            <Link to="/members/member.id" className="uncolored">
                <Image centered src={bull} size="tiny"/>
                <p className="name">
                    member.id
                </p>
                <p className="subtext">1000 shares</p>
            </Link>
            </Router>
        </ProfileHover>
    );
};

const Contributors = () => {

    var members = []
    var contributor = {}
    for (var i = 1; i <= 50; i++) {
        contributor.id = i
        contributor.shares = 1000
        members.push(contributor)
    }

    return members.length > 0
        ? (members.map((contributor, idx) => (
            <MemberAvatar address={contributor.id} shares={contributor.shares} key={idx}/>
        )))
        : (<> No contributors to show.</>);
};

const MemberList = props => {

    return (
        <div id="member_list">
            <Grid columns={16} verticalAlign="middle">
                <Grid.Column
                    mobile={16}
                    tablet={6}
                    computer={6}
                    textAlign="left"
                    className="member_list_header">
                    <p className="subtext">1000 Members</p>
                </Grid.Column>
            </Grid>

            <Grid>
                <Grid.Column textAlign="center">
                    <LoggedInUser />
                </Grid.Column>
            </Grid>
            <Grid className="member_item">
                <Grid.Row>
                    <p style={{ paddingLeft: "1rem" }}>Elders (100+ shares)</p>
                </Grid.Row>
                <Divider/>
                <Grid.Row className="members_row" centered>
                    <Elders/>
                </Grid.Row>
            </Grid>
            <Grid className="member_item">
                <Grid.Row>
                    <p style={{ paddingLeft: "1rem" }}>Contributors</p>
                </Grid.Row>
                <Divider/>
                <Grid.Row className="members_row" centered>
                    <Contributors/>
                </Grid.Row>
            </Grid>
        </div>
    );
};

const MemberPage = () => (
    <Router>
    <Switch>
        <Route exact path="/members" render={props => <MemberList/>}/>
        {/* <Route path="/members/:name" render={props => <MemberDetail/>}/> */}
    </Switch>
    </Router>
);

export default MemberPage;
