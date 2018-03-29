const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'iota-bip39.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'iotaBip39'
  }
};
