require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile purpose hunt cash force seminar'; 
let testAccounts = [
"0x0dbb7dbff1d2e029c1b1da838ef73b11878605d2bc8f23ed05d924c6e42a8b07",
"0x3e30c527528042ba2d7cefe4b506877378d9f5a1095aac3033db923ee1a0601c",
"0x71746a701607ba41c4e1d02b03197c3a6769a6befe1e8dd540ee6447812f1bdc",
"0x9cfdc7d9f150905db045da814d8f5ed6c55f062c0e2af3c3bcb8d51397166e33",
"0x06aa110fd76baa223aaf1281d63d197e7ae4a1abd206d73b4e478f73f7c00de3",
"0x00702b638c6668d31454710e613d36e69adc76fdaa12c3289cf0bb7311461bd6",
"0x9c19411c6ae89ca867f5f7c42c84d9cf9f205337008e1b1ee4ec1c12900ff2a7",
"0x423f13de3f93a565086c9c5a3a31acb60e716b62e77e6b1c59e358b37cab6aa6",
"0x3091d1acff32fd1cb8aadc7d9fc0b3e2cd89e43c20b95c633a762dac5a929925",
"0x18eb5a0c7d46b6ce076d621879dd8acfeba516fe334acf3acf38d9edce1c6087"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

