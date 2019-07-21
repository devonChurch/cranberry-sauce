require("dotenv").config();
const webpack = require("webpack");
const pkg = require("../package.json");

console.log("custom webpack configuration");

const { NODE_ENV, BAR, BAZ } = process.env;
const define = variable => JSON.stringify(variable);

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      APP_VERSION: define(pkg.version),
      NODE_ENV: define(NODE_ENV),
      FOO: define("potato"),
      BAR: define(BAR),
      BAZ: define(BAZ)
    })
  ]
};
