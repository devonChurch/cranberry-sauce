require("dotenv").config();
const webpack = require("webpack");
const pkg = require("../package.json");
const { NODE_ENV, FIREBASE_API_KEY } = process.env;
const define = variable => JSON.stringify(variable);

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      APP_VERSION: define(pkg.version),
      NODE_ENV: define(NODE_ENV),
      FIREBASE_API_KEY: define(FIREBASE_API_KEY)
    })
  ]
};
