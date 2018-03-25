const bip39 = require("bip39");
const iotaCrypto = require('iota.lib.js/lib/crypto/converter/converter');
const BigNumber = require("bignumber.js");

const toTrytes = function(mnemonic, passphrase) {
    if (!bip39.validateMnemonic(mnemonic)) {
        throw new Error('The Mnemonic you provided is not valid!: ' + mnemonic);
    }
    const pass = passphrase ? passphrase.toString() : undefined
    const seedHex = bip39.mnemonicToSeedHex(mnemonic, pass);
    const seedDec = new BigNumber(parseInt(seedHex, 16), 10);
    const seedTrits = iotaCrypto.fromValue(seedDec);
    return iotaCrypto.trytes(seedTrits);
}

const toSeed = function(mnemonic, passphrase) {
    return toTrytes(mnemonic, passphrase).slice(0, 81);
}

module.exports = {
    toTrytes,
    toSeed
}
