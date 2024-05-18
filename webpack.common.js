import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

/** @type {import('webpack').Configuration} */
export default {
  devtool: "cheap-module-source-map",
  entry: path.resolve(process.cwd(), "/src/index.tsx"),
  output: {
    filename: "main.js",
    path: path.resolve(process.cwd(), "dist"),
  },
  devServer: {
    hot: true, // hot reloading
    port: 3000, // port on which server will run
    open: true, // open browser automatically on start
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", "jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
};
