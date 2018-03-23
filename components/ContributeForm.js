import React, { Component } from 'react';
import { Form, Input, Message, Button } from "semantic-ui-react";
import { Router } from '../routes';
import getCampaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';

class ContributeForm extends Component {
  state = {
    value: '0.001',
    errorMsg: '',
    loading: false,
  }

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    this.setState({ errorMsg: '' });

    const campaign = getCampaign(this.props.address);

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });

      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMsg: err.message });
    }
    this.setState({ loading: false });
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
        <Form.Field>
          <label>Contribution Amount</label>
          <Input
            label="Ether"
            labelPosition="right"
            value={this.state.value}
            onChange={event =>
              this.setState({ value: event.target.value })
            } 
          />
        </Form.Field>
        <Message
          error
          header="Oops"
          content={this.state.errorMsg}
        />
        <Button primary loading={this.state.loading}>Contribute!</Button>
      </Form>
    )
  }
}

export default ContributeForm;