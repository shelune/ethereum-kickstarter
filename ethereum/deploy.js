const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

require('dotenv').config();

const provider = new HDWalletProvider(
  process.env.MNEMONIC,
  process.env.NETWORK_URL
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('deploying from this account: ', accounts[0]);

  const contract = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({
      data: compiledFactory.bytecode
    })
    .send({
      gas: 1000000,
      from: accounts[0]
    });
  console.log('contract deployed at: ', contract.options.address);
};
// latest address: 0x43b2e066051e8E88a957a237e44948f4D97F6c78
deploy();