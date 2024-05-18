import { merge } from "webpack-merge";
import common from "./webpack.common.js";

/** @type {import('webpack').Configuration} */
export default () =>
  merge(common, {
    mode: "development",
    devServer: {
      hot: true, // hot reloading
      port: 3000, // port on which server will run
      open: true, // open browser automatically on start
    },
  });
