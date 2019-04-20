const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  // even in production build
  // TODO minify css. maybe have a look at https://webpack.js.org/guides/production/
  // webpack told me I should have a source-map even in production
  devtool: "source-map"
});
