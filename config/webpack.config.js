var nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: "./index.js",
  output: {
    path: './dist',
    libraryTarget: 'commonjs2',
    filename: "reactNativeRouterSinux.js"
  },
  externals: [
    nodeExternals(),
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",query: {compact: false} }
    ]
  }
}