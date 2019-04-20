const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  // webpack told me I should have a source-map
  // even in production build
  // TODO minify css. maybe have a look at https://webpack.js.org/guides/production/
  devtool: "source-map"
});
