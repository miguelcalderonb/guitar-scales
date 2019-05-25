const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    library: 'GuitarScale',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  }
};