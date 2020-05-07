require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile punch harvest creek fringe two'; 
let testAccounts = [
"0x3e15b5a887dcd3d4ceebfa7d9307833fb365264da7781dee0ff1e2d620e690df",
"0x207c1bb21d88cd159c4bbe439abdda28aa3ca27e1a37a95b2ddd533f261dc575",
"0xe4c21dc9c0aeb789d9cafb5494f23016a20a0f013f9aa9c4c1210db80cdf208e",
"0x972a76c26bf50dadb53ffd8ce2ca0b11dd917e667535fea715f4867eff872b5f",
"0x73a8e3677faf4b33577d8c13e9be2110d343b6226dd9df48726cb01d3923c65b",
"0x2b21e378ac806e5b20dd5f2a51d60ffb3aec8a9ba7f5b8dab2ed45680b7da693",
"0xa2cd2660dc4a94f2044d07e24e1d352a5a8f671c52eb60af98b5379acbe81589",
"0xba0fcf7fe65aafbd6f6e28f3e4d094f8ad6453be5034b3a317a119584a78b28d",
"0x303cd6710c37ec3d26f8ccc71422f38f4171e6c43ac8aed5052f3afdd8eeb9d8",
"0xe8e4356c99f388b310e86bca450a313ccd5aa9992dd6b12c8f02fe306e94d52d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
