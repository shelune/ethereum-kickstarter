import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';

import { Router } from '../routes';
import web3 from '../ethereum/web3';
import getCampaign from '../ethereum/campaign';

class RequestRow extends Component {
  state = {
    approving: false,
    finalizing: false,
  }

  onApprove = async () => {
    const { id, address } = this.props;
    const campaign = getCampaign(address);
    const accounts = await web3.eth.getAccounts();
    
    this.setState({ approving: true });

    await campaign.methods.approveRequest(id).send({
      from: accounts[0]
    });

    this.setState({ approving: false });

    Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
  }

  onFinalize = async () => {
    const { id, address } = this.props;
    const campaign = getCampaign(address);
    const accounts = await web3.eth.getAccounts();

    this.setState({ finalizing: true });

    await campaign.methods.finalizeRequest(id).send({
      from: accounts[0]
    });

    this.setState({ finalizing: false });
    Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
  }

  render() {
    const { Row, Cell } = Table;
    const { id, request, address, approversCount } = this.props;
    return (
      <Row disabled={request.complete}>
        <Cell>{id + 1}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, 'ether')} ETH</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>{request.approvalCount} / {approversCount}</Cell>
        <Cell>
          {!request.complete && (
            <Button color="green" basic onClick={this.onApprove} loading={this.state.approving}>Approve</Button>
          )}
        </Cell>
        <Cell>
          {!request.complete && (
            <Button color="teal" basic onClick={this.onFinalize} loading={this.state.finalizing}>Finalize</Button>
          )}
        </Cell>
      </Row>
    )
  }
}

export default RequestRow;