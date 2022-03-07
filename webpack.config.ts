import { Configuration } from 'webpack'
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config: Configuration = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    filename: "main.js",
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".wasm"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
};

export default config;