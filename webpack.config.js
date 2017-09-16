var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'js');
var STYLES_DIR = path.resolve(__dirname, 'css');

var config = {
  entry: {
    react: APP_DIR + '/react.jsx',
    angular: APP_DIR + '/angular.js',
    backbone: APP_DIR + '/backbone.js',
    styles: STYLES_DIR + '/app.scss'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name]_bundle.js'
  },
  devServer: {
    contentBase: BUILD_DIR,
    hot: true,
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test: /\.scss$/,
        loaders: [ 'style', 'css', 'sass' ]
      }
    ]
  },
}

module.exports = config;
