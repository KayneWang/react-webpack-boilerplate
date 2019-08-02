const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const notifier = require('node-notifier')

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
    clientLogLevel: 'none',
    quiet: true,
    overlay: true,
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running http://localhost:1234']
      },
      onErrors: (severity, errors) => {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: 'Webpack error',
          message: severity + ': ' + error.name,
          subtitle: error.file || ''
        });
      }
    }),
  ]
})