var webpack = require('webpack');

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.inferno.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: [['inferno', { inline: true }]]
        }
      },
      {
        test: /\.monk?$/,
        loader: 'monkberry-loader'
      },
      {
        test: /\.vue?$/,
        loader: 'vue-loader'
      }
    ]
  },
  vue: {
    loaders: {
        js: 'babel'
      }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
