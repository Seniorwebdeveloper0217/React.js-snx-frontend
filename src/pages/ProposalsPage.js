import React from "react";
import { Segment, Grid, Button, Tab, Icon, Loader } from "semantic-ui-react";
import { Route, Switch, Link } from "react-router-dom";

// import ProposalDetail from "./ProposalDetail";
import ProgressBar from "./ProgressBar";

const ProposalCard = ({ proposal }) => {
    let id = proposal.id;
  
    return (
      <Grid.Column mobile={16} tablet={8} computer={5}>
        <Link to={{ pathname: `/proposals/${id}` }} className="uncolored">
          <Segment className="blurred box">
            <p className="name">{"MGP 35—$10,000 for Tornado Cash Trusted Setup"}</p>
            <p className="subtext description">
              {proposal.description ? proposal.description : "N/A"}
            </p>
            <Grid columns="equal" className="value_shares">
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <p className="subtext">Shares Requested</p>
                  <p className="amount">{proposal.sharesRequested}</p>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <p className="subtext">
                    Tribute <Icon name="ethereum" />
                  </p>
                  <p className="amount">"100"</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid columns="equal" className="deadlines">
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Segment className="voting pill" textAlign="center">
                    {"Voting ends: 1 days"}
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            {proposal.aborted ? (
              <Grid columns="equal" className="deadlines">
                <Grid.Row>
                  <Grid.Column textAlign="center">
                    <p className="amount">Aborted</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            ) : (
              <ProgressBar yes={proposal.yesShares} no={proposal.noShares} />
            )}
          </Segment>
        </Link>
      </Grid.Column>
    );
  };

const ProposalList = () => {

    let votingPeriod =[];
    for(var i=0; i<=5; i++){
        votingPeriod.push(i,i*10);
    }
  
    const panes = [
      {
        menuItem: "Voting Period (5)",
        render: () => (
          <Tab.Pane attached={false}>
            <Grid columns={3}>
              {votingPeriod.map((p, index) => (
                <ProposalCard
                  exchangeRate={100}
                  shareValue={100}
                  totalShares={+100}
                  proposal={p}
                  key={index}
                />
              ))}
            </Grid>
          </Tab.Pane>
        ),
      },
      {
        menuItem: "Grace Period (5)",
        render: () => (
          <Tab.Pane attached={false}>
            <Grid columns={3}>
              {votingPeriod.map((p, index) => (
                <ProposalCard
                  exchangeRate={100}
                  shareValue={100}
                  totalShares={100}
                  proposal={p}
                  key={index}
                />
              ))}
            </Grid>
          </Tab.Pane>
        ),
      },
      {
        menuItem: "Ready For Processing (5)",
        render: () => (
          <Tab.Pane attached={false}>
            <Grid columns={3}>
              {votingPeriod.map((p, index) => (
                <ProposalCard
                  exchangeRate={100}
                  shareValue={100}
                  totalShares={100}
                  proposal={p}
                  key={index}
                />
              ))}
            </Grid>
          </Tab.Pane>
        ),
      },
      {
        menuItem: "In Queue (5)",
        render: () => (
          <Tab.Pane attached={false}>
            <Grid columns={3}>
              {votingPeriod.map((p, index) => (
                <ProposalCard
                  exchangeRate={100}
                  shareValue={100}
                  totalShares={100}
                  proposal={p}
                  key={index}
                />
              ))}
            </Grid>
          </Tab.Pane>
        ),
      },
      {
        menuItem: "Completed (5)",
        render: () => (
          <Tab.Pane attached={false}>
              <Grid columns={3}>
                {votingPeriod.map((p, index) => (
                  <ProposalCard
                    exchangeRate={100}
                    shareValue={100}
                    totalShares={100}
                    proposal={p}
                    key={index}
                  />
                ))}
              </Grid>
            )}
          </Tab.Pane>
        ),
      },
    ];
  
    return (
      <div id="proposal_list">
        <>
          <Grid columns={16} verticalAlign="middle">
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={4}
              textAlign="right"
              floated="right"
              className="submit_button"
            >
              <Link to="/proposalsubmission" className="link">
                <Button size="large" color="red">
                  New Proposal
                </Button>
              </Link>
            </Grid.Column>
          </Grid>
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </>
      </div>
    );
  };

const ProposalPage = () => {
    return (
      <Switch>
        <Route exact path="/proposals" render = {props => <ProposalList />} />
        {/* <Route path="/proposals/:id" componet = {ProposalDetail} /> */}
      </Switch>
    );
  };
  
  export default ProposalPage;