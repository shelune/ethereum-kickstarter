import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';

import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import { Link, Router } from '../../routes';

class CampaignNew extends Component {
  state = {
    minContribution: '1000',
    errorMsg: '',
    loading: false,
  }

  onSubmit = async (event) => {
    event.preventDefault();
    
    this.setState({ loading: true });
    this.setState({ errorMsg: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(this.state.minContribution).send({
        from: accounts[0]
      });
      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMsg: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h1>Add New Campaign</h1>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input 
              label="Wei" 
              labelPosition="right" 
              value={this.state.minContribution}
              onChange={event => 
                this.setState({ minContribution: event.target.value })
              }
            />
            
          </Form.Field>
          
          <Message 
            error 
            header="Oops" 
            content={this.state.errorMsg}
          />

          <Button primary loading={this.state.loading}>
            Create
          </Button>
        </Form>
        
      </Layout>
    )
  }
}

export default CampaignNew;