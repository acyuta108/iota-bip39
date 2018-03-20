const bip39 = require('bip39');
const converter = require('./converter');

const generateMnemonic = function(strength=256, rng, worldlist) {
  return bip39.generateMnemonic(strength, rng, worldlist);
}

module.exports = {
  validateMnemonic: bip39.validateMnemonic,
  generateMnemonic
}
