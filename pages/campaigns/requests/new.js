import React, { Component } from 'react';
import { Form, Button, Message, Input, Breadcrumb } from "semantic-ui-react";
import getCampaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import Layout from '../../../components/Layout';
import { Link, Router } from '../../../routes';

class RequestNew extends Component {
  static async getInitialProps(props) {
    const { address }  = props.query;
    return {
      address
    };
  }

  state = {
    value: '',
    description: '',
    recipient: '',
    errorMsg: '',
    loading: false
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const campaign = getCampaign(this.props.address);
    const { description, value, recipient } = this.state;

    this.setState({ loading: true });
    this.setState({ errorMsg: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.createRequest(
        description,
        web3.utils.toWei(value, 'ether'),
        recipient
      ).send({
        from: accounts[0]
      });

      this.setState({ loading: false });

      Router.pushRoute(`/campaigns/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMsg: err.message });
    }
  }

  render() {
    return (
      <Layout>
        <Breadcrumb>
          <Breadcrumb.Section link><Link route="/"><span>Home</span></Link></Breadcrumb.Section>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section link><Link route={`/campaigns/${this.props.address}`}><span>{this.props.address}</span></Link></Breadcrumb.Section>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section link><Link route={`/campaigns/${this.props.address}/requests`}><span>Requests</span></Link></Breadcrumb.Section>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section active><span>New Request</span></Breadcrumb.Section>
        </Breadcrumb>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
          <h1>New Request</h1>
          <Form.Field>
            <label>Request Description</label>
            <Input
              value={this.state.description}
              onChange={event => this.setState({ description: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Request Value</label>
            <Input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
              label={'ETH'}
              labelPosition="right"
            />
          </Form.Field>

          <Form.Field>
            <label>Request Recipient</label>
            <Input
              value={this.state.recipient}
              onChange={event => this.setState({ recipient: event.target.value })}
            />
          </Form.Field>

          <Message
            error
            header="Oops"
            content={this.state.errorMsg}
          />

          <Button primary loading={this.state.loading}>Create</Button>
        </Form>
      </Layout>
    )
  }
}

export default RequestNew;