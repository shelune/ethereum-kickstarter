import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';

import { Link } from '../routes';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return {campaigns};
  }

  _renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <Link route={`campaigns/${address}`}><a>View Campaign</a></Link>,
        fluid: true
      }
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          
          <h1>All Campaigns</h1>
          <Link route='/campaigns/new'>
            <a>
              <Button
                floated="right"
                content='New Campaign'
                icon='add circle'
                labelPosition='left'
                primary
              />
            </a>
          </Link>
          
          {this._renderCampaigns()}
        </div>
      </Layout>
      
    )
  }
}

export default CampaignIndex;