import React from "react";
import {Grid, Button, Statistic, Loader} from "semantic-ui-react";
import {Link} from "react-router-dom";

const NumMembers = () => (
    <Link to="/members" className="link">
        <Button color="grey" size="medium" fluid>
            Members
        </Button>
    </Link>
);

const NumProposals = () => (
    <Link to="/proposals" className="link">
        <Button color="grey" size="medium" fluid>
            Proposals
        </Button>
    </Link>
);

const MolochPool = () => (
    <Link to="/pool" className="link">
        <Button compact color="grey" size="medium" fluid>
            Pool
        </Button>
    </Link>
);

const HomePage = () => {

    return (
        <div id="homepage">
            <Grid container verticalAlign="middle" textAlign="center">
                <Grid container doubling stackable columns="equal" verticalAlign="bottom">
                    <Grid.Column>
                        <Grid.Row className="guild_value" textAlign="center">
                            <Statistic inverted>
                                <Statistic.Label>Guild Bank Value</Statistic.Label>
                                <Statistic.Value>$936,173.67</Statistic.Value>
                            </Statistic>
                        </Grid.Row>
                        <Grid.Row className="pool_value" textAlign="center">
                            <Statistic size="tiny" inverted>
                                <Statistic.Label>Moloch Pool Value</Statistic.Label>
                                <Statistic.Value>$544.23</Statistic.Value>
                            </Statistic>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <Grid
                            container
                            doubling
                            stackable
                            columns={3}
                            padded
                            textAlign="center">
                            <Grid.Column>
                                <NumMembers/>
                            </Grid.Column>
                            <Grid.Column>
                                <NumProposals/>
                            </Grid.Column>
                            <Grid.Column>
                                <MolochPool/>
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                </Grid>

                <Grid
                    container
                    stackable
                    columns={3}
                    className="blurred box">
                    <Grid.Column textAlign="center">
                        <Statistic inverted label="Total Shares" value="6998"/>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Statistic
                            inverted
                            label="Total ETH"
                            value="5608"/>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Statistic
                            inverted
                            label="Share Value"
                            value="$133.78"/>
                    </Grid.Column>
                </Grid>
            </Grid>
        </div>
    );
};

export default HomePage;
