import React, { Component } from 'react';
import { Link } from '../../../routes';
import { Button, Table } from "semantic-ui-react";
import Layout from "../../../components/Layout";
import RequestRow from '../../../components/RequestRow';

import getCampaign from '../../../ethereum/campaign';

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const campaign = getCampaign(address);
    const requestsCount = await campaign.methods.getRequestsCount().call();
    const approversCount = await campaign.methods.approversCount().call();

    const requests = await Promise.all(
      Array(parseInt(requestsCount)).fill().map((element, index) => {
          return campaign.methods.requests(index).call();
      })
    );

    return {
      address,
      requests,
      approversCount,
      requestsCount
    };
  }

  renderRows() {
    return this.props.requests.map((request, index) => {
      return (
        <RequestRow 
          id={index}
          address={this.props.address}
          key={index}
          request={request}
          approversCount={this.props.approversCount}
        />
      )
    })
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <h1>Requests</h1>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary floated="right" style={{ marginBottom: 10 }}>Add Request</Button>
          </a>
        </Link>
        <Table celled>
          <Header>
            <Row>
              <HeaderCell>#</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approvals</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.renderRows()}
          </Body>
        </Table>
        <div>
          Found {this.props.requestsCount} requests!
        </div>
      </Layout>
    )
  }
}

export default RequestIndex;