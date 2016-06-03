var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var LESS_DIR = path.resolve(__dirname, 'src/less');

var config = {
  entry : {
    "filteredList" : APP_DIR + '/FilteredList.jsx',
    "index" : APP_DIR + '/index.jsx',
    "example" : APP_DIR + '/example.jsx'
  },
  output : {
    path : BUILD_DIR,
    filename : '[name].js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test : /\.less$/,
        include : LESS_DIR,
        loader : 'style!css!less'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM : 'react-dom'
    })
  ]
};

module.exports = config;
