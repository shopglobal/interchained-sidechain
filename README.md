# Interchained | Web3 + 0x | Wallet Utility 
- built-in Web3 Engine to handle ERC20, and BEP20 transactions simultaneously 
- custom properties tracking to identify unique details for each BEP20 and/or ERC20 account(s)
- separate command-line utility, and web applications 
- compatibile with ERC20 & BEP20
- supports multiple blockchain transaction types, 
- increases interoperability between blockchains, ERC20/BEP20 tokens, and coins
- user account handling (soon)
- Electronero Passport API integration (soon)
- enables cross-chain swaps: ERC20 to BEP20, BEP20 to ERC20, ERC20/BEP20 to coins, coins to ERC20/BEP20 (soon)

## Command-line + Server utilities for handling Ethereum + Binance Smart Chain account(s)
Easy handling of ERC20/BEP20 tokens. For use with tokenized Electronero assets, or for integration Ethereum &amp; Binance Smart Chain into Webnero or Electronero Passport utilities. The module contained in this repository consists of example script(s) and a package.json which contains additional utilities we use for handling ERC20/BEP20 within NodeJS. It could be modified to be used with any project. This repository is the host for the Electronero Project. So feel free to fork your own version, and for any features you would like to share with the community just submit a pull request and it will be merged within reasonable time by one of the maintainers. 

# Requirements
- NodeJS, NPM, 
- A Web3 connection to ETH and BSC (Need help? See Getting Started with Web3 below)

# Getting Started with Web3
web3.js is a javascript library that allows our client-side application to talk to the blockchain. We configure web3 to communicate via Metamask.
Web3 can be obtained through NPM and connection to ETH / BSC blockchain can be established through public/private channels.

Web3 NPM: https://www.npmjs.com/package/web3
Web3 DOCS: https://web3js.readthedocs.io/en/v1.2.2/getting-started.html#adding-web3-js
Installing Web3 is as easy as ````npm i web3 --save````
Then in the app require Web3 ````const Web3 = require('web3');````

## Establish Web3 Connection to ETH blockchain with Infura 
To get started quickly we establish a Web3 connection to ETH network via an Infura API key to use for ERC20 blockchain calls:
https://infura.io/docs/ethereum#section/Make-Requests
https://blog.infura.io/getting-started-with-infuras-ethereum-api/

Since we required Web3 now we can access Web3 in Interchained, and established a connection to ETH blockchain with Infura. 
```
// mainnet ETH
const eth_web3 = new Web3('https://mainnet.infura.io/v3/a60a84ebf4fe4290b094b75d9c383b7f');
// testnet ETH
// const eth_web3 = new Web3('https://rinkeby.infura.io/v3/a24f8ja84fea5fb79c3094eb46842d90');
```
Now that ETH is initialized in Interchained, let's prepare to to connect with BSC blockchain.

## Establish Web3 Connection to Binance Smart Chain directly through Binance 
To get started quickly we'll establish a Web3 connection to BSC network to use for BEP20 calls:
https://docs.binance.org/smart-chain/developer/create-wallet.html
https://docs.binance.org/smart-chain/guides/bsc-intro.html

We are ready to proceed with BSC. Ok will establish a connection to BSC blockchain directly. 
```
// mainnet BSC
const bep_web3 = new Web3('https://bsc-dataseed1.binance.org:443');
// testnet BSC
// const bep_web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
```
# Donate
Donate to Electronero Network Project Exchange Listing Fund!
 Bonus coins are available to qualifying donors. See below for details. To donate now select an address below, and message @_electronero on Twitter (https://twitter.com/_electronero) to claim your bonus. Twitter @_electronero are the only authorized Electronero core members authorized to accept donations for the listing fund, and distribute bonus free coins. Don't accept any private messages from anyone claiming to be members of Electronero project. Only https://twitter.com/_electronero is the official @_electronero twitter page. 
 
 Bonus free coins are distributed in the donors choice of Electronero Network coins in any combination: ETNX, ETNXP, LTNX, GLDX, or CRFI. 
 Bonus coins are free ETNX, ETNXP, LTNX, GLDX, or CRFI coins made available through the official listing fund coin pool. Bonus free coins from 1.5x multiplier all the way up to 10x multipliers are available for donations over $150 value in any digital currency. 

Donate ₮1000 to the Electronero Project Exchange Listing Fund, and receive a free gift. 
A ₮2000 bonus in ETNX, ENTXP, LTNX, GLDx, or CRFI coins

Bonus free coins are multiplied based on your donation! 

```
Donate over ₮150 to receive 1.5x free bonus coins.
Donate over ₮1000 to receive 2x free bonus coins.
Donate over ₮2500 to receive 2.5x free bonus coins.
Donate over ₮3000 to receive 3x free bonus coins.
Donate over ₮5000 to receive 5x free bonus coins.
Donate over ₮10,000 to receive 10x free bonus coins.
```

```
Example: Donate ₮1000, and receive ₮2000 free bonus coins in ETNX, ENTXP, LTNX, GLDx, or CRFI.
```

Official Donation Addresses:
LTC: `MAtV7sbBnmuf2bxVUPgCprpmJ5xX6euBwe`

BTC: `38jiBKevQHp8zhQpZ42bTvK4QpzzqWkA3K`

DOGE: `DTTez7ggKPzDcKuUUTns8VzMrKesZUKMCk`

DASH: `XcFVDo2k3XRJwQKQQRgMBfhCEDFANawQ3B`

ETH: `0x59d26980a1cdd75e1c3af516b912a6233aa2f5e4`

USDt: `0x59d26980a1cdd75e1c3af516b912a6233aa2f5e4`

XMR: `85PTaJNpkEEeJao2MNk1sRWTQXLUf1FGjZew8oR8R4cRUrXxFrTexa9GwrjmJD4Pyx6UrjgMQnuMoFNmaBKqxs7PPXVe9oX`
```
 To donate other coins not mentioned above message @_electronero on Twitter (https://twitter.com/_electronero directly.
 No KYC, and no personal information is necessary to claim bonus free coins. To claim bonus free coins simply message @_electronero on Twitter (https://twitter.com/_electronero) the following proof of spend to track coins/tokens donated: 
• coin symbol
• amount of coins donated
• transaction ID 
• screenshot of withdrawal from your wallet

```

