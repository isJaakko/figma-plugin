const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  entry: path.resolve(__dirname, "../src/code.ts"),
  output: {
    filename: "code.js",
    path: path.resolve(__dirname, "../dist"),
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
};
