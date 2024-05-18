import path from "path";

/** @type {import('webpack').Configuration} */
export default {
  entry: "./index.html",
  output: {
    filename: "main.js",
    path: path.resolve(process.cwd(), "dist"),
  },
};
