const webpack = require("webpack");
const pkg = require("../package.json");

console.log("custom webpack configuration");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify(pkg.version),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      FOO: JSON.stringify("potato")
    })
  ]
};
