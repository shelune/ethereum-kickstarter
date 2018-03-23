const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts, factory, campaignAddress, campaign;

const minContribution = '1000';

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
  .deploy({ data: compiledFactory.bytecode })
  .send({ from: accounts[0], gas: 1000000 });

  await factory.methods.createCampaign(minContribution).send({
    from: accounts[0],
    gas: 1000000
  });

  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
});

describe('Kickstart Contract', () => {
  it('deploys a factory and a campaign', () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it('assigns creator as the campaign manager', async () => {
    const managerAddress = await campaign.methods.manager().call();
    assert.equal(accounts[0], managerAddress);
  });

  it('allows contributions and marks approvers accordingly', async () => {
    await campaign.methods.contribute().send({
      from: accounts[1],
      value: '10000'
    });

    const isApproved = await campaign.methods.approvers(accounts[1]).call();
    assert(isApproved);
  });

  it('disallows contributions less than minimum', async () => {
    try {
      await campaign.methods.contribute().send({
        from: accounts[1],
        value: '1'
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('allows manager to create a payment request', async () => {
    await campaign.methods.createRequest(
      'Buy Stuff',
      '100000',
      accounts[1]
    ).send({
      gas: 1000000,
      from: accounts[0]
    });

    const request = await campaign.methods.requests(0).call();
    assert.equal(request.description, 'Buy Stuff');
  });

  it('processes requests', async () => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    });
    
    await campaign.methods.createRequest(
      'Buy Some More Stuff',
      web3.utils.toWei('5', 'ether'),
      accounts[1]
    ).send({
      from: accounts[0],
      gas: 1000000
    });

    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: 1000000
    });
    
    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: 1000000
    });

    const balance = await web3.eth.getBalance(accounts[1]);
    const balanceInEther = parseFloat(web3.utils.fromWei(balance, 'ether'));
    console.log('balance: ', balanceInEther);
    assert(balanceInEther > 104);
  })
});