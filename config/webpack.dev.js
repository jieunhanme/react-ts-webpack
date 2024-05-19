import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

/** @type {import('webpack').Configuration} */
export default () =>
  merge(common, {
    mode: "development",
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
          use: [
            {
              loader: "babel-loader",
              options: {
                plugins: ["react-refresh/babel"],
              },
            },
            "ts-loader",
          ],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
      ],
    },
    plugins: [new ReactRefreshWebpackPlugin()],
  });
