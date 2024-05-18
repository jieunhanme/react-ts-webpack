import { merge } from "webpack-merge";
import common from "./webpack.common.js";

/** @type {import('webpack').Configuration} */
export default () =>
  merge(common, {
    mode: "production",
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
  });
