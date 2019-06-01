const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'guitar-scales.min.js',
    library: 'GuitarScale',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  }
};