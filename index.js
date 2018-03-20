var generator = require('./lib/generator');
var converter = require('./lib/converter');

module.exports = {
  generate: generator.generateMnemonic,
  validate: generator.validateMnemonic,
  toTrytes: converter.toTrytes,
  toSeed:   converter.toSeed
}
