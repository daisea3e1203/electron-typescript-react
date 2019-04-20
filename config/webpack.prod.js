const merge = require("webpack-merge");

const common = require("./webpack.common.js");
const mainPartial = require("./webpack.main.js");
const rendererPartial = require("./webpack.renderer.js");

const prod = {
  mode: "production",
  // even in production build
  // TODO minify css. maybe have a look at https://webpack.js.org/guides/production/
  // webpack told me I should have a source-map even in production
  devtool: "source-map"
};

const main = merge(common, mainPartial, prod);
const renderer = merge(common, rendererPartial, prod);

module.exports = [main, renderer];
