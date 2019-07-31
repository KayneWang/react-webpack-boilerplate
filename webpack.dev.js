const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    chunkFilename: '[name].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 1234,
    contentBase: './dist',
    compress: true,
    hot: true,
    clientLogLevel: 'none'
  }
})