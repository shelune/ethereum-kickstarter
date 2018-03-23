import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import getCampaign from '../../ethereum/campaign';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

import web3 from '../../ethereum/web3';

class CampaignSingle extends Component {
  static async getInitialProps(props) {
    const campaign = getCampaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    console.log('campaign data: ', summary);
    return {
      minContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      address: props.query.address,
    };
  }

  _renderCards() {
    const {balance, minContribution, requestsCount, approversCount, manager} = this.props;
    const items = [
      {
        header: 'Campaign Balance',
        description: web3.utils.fromWei(balance, 'ether'),
        meta: 'How much money this project currently has'
      },
      {
        header: 'Manager',
        description: manager,
        meta: 'Address of the owner of this campaign',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: 'Requests Submitted',
        description: requestsCount,
        meta: 'Number of requests proposed'
      },
      {
        header: 'Minimum Contribution',
        description: minContribution,
        meta: 'Minimum amount of Wei required for a contribution'
      },
      {
        header: 'Contributors Count',
        description: approversCount,
        meta: 'Number of contributors in this project'
      },
    ];

    return (
      <Card.Group  items={items} />
    );
  }
  
  render() {
    return (
      <Layout>
        <h1>Campaign</h1>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              {this._renderCards()}
            </Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
          
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a><Button primary>View Requests</Button></a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
      </Layout>
    );
  }
}

export default CampaignSingle;