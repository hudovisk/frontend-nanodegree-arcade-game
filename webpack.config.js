const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: [path.resolve(__dirname, "js/app/index.js")],
  output: {
    path: path.resolve(__dirname, "js"),
    filename: "app.js"
  },
  devtool: "inline-source-map",
  devServer: {
    inline: false,
    publicPath: "/js/",
    overlay: true,

    contentBase: "./"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(["js/app.js"])]
};
