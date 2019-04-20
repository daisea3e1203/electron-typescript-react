const path = require("path");

module.exports = {
  name: "main",
  target: "electron-main",
  entry: path.resolve(__dirname, "..", "src", "main", "index.ts"),
  output: {
    filename: "electron.js",
    path: path.resolve(__dirname, "..", "dist")
  },
  node: {
    // use default regular Node.js behaviors
    __dirname: false,
    __filename: false
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/
      }
    ]
  }
};
