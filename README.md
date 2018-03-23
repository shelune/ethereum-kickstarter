First, run `node ethereum/compile.js`.

Then you'll need an `env` file that looks something like this
```
MNEMONIC=[your 12-word mnemonic phrase goes here]
NETWORK_URL=[your Infura URL]
FACTORY_ADDRESS=[the address of the factory (obtained after running deploy.js)]
```

Run `node ethereum/deploy.js` to get that `FACTORY_ADDRESS`. Put it in the `.env` file.

Hit `npm run dev`.