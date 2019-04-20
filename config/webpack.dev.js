const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");

const common = require("./webpack.common.js");
const mainPartial = require("./webpack.main.js");
const rendererPartial = require("./webpack.renderer.js");

const dev = {
  mode: "development",
  // probably should use eval-source-map or something in real dev
  devtool: "inline-source-map"
};

const devhot = {
  devServer: {
    // tells where to serve static file from.
    // if I want to use this, don't use CleanWebpackPlugin
    contentBase: path.join(__dirname, "..", "dist"),
    // you could use react hot loader if prefered
    // https://gaearon.github.io/react-hot-loader/getstarted/
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

const main = merge(common, mainPartial, dev);
const renderer = merge(common, rendererPartial, dev, devhot);

module.exports = [main, renderer];
