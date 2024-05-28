const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // if u encounter any css file
        use: ["style-loader", "css-loader"], // loaders are read right to left
      },
      {
        test: /\.s[ac]ss$/i, // if u encounter any scss file
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
