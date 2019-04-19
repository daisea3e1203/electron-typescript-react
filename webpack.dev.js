const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",
  // probably should use eval-source-map or something in real dev
  devtool: "inline-source-map",
  devServer: {
    // tells where to serve static file from.
    // if I want to use this, don't use CleanWebpackPlugin
    contentBase: path.join(__dirname, "dist"),
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
