var webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: path.join(__dirname, 'src', 'main'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  },
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname),
    watchContentBase: true
  }
};