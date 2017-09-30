const path = require('path');
const webpack = require('webpack');
const combineLoaders = require('webpack-combine-loaders');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: 'build/',
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractTextPlugin('styles-[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          combineLoaders([
            {
              loader: 'css-loader',
              query: {
                modules: true,
              },
            },
          ]),
        ),
      },
    ],
  },

  plugins: [HTMLWebpackPluginConfig]
};
