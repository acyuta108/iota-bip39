const bip39 = require('bip39');
const IOTA = require('iota.lib.js');
const iota = new IOTA();

const toTrytes = function(mnemonic, passphrase) {
  if (!bip39.validateMnemonic(mnemonic)) {
    throw new Error('The Mnemonic you provided is not valid!');
  }
  const seedBuffer = bip39.mnemonicToSeedHex(mnemonic, passphrase);
  return iota.utils.toTrytes(seedBuffer);
}

const toSeed = function(mnemonic, passphrase) {
  return toTrytes(mnemonic, passphrase).slice(0, 81);
}

module.exports = {
  toTrytes,
  toSeed
}
