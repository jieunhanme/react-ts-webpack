import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

/** @type {import('webpack').Configuration} */
export default {
  entry: path.resolve(process.cwd(), "src/main.tsx"),
  output: {
    publicPath: "auto",
    path: path.resolve(process.cwd(), "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 5000,
              fallback: "file-loader",
              name: "image/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "@src": path.resolve(process.cwd(), "src/"),
      "@img": path.resolve(process.cwd(), "public/assets/img/"),
    },
    extensions: [".js", "jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html", publicPath: "/" }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new CleanWebpackPlugin(),
  ],
};
