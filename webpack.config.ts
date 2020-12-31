import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

module.exports = {
  mode: "development",

  entry: "./src/index.tsx",
  devServer: {
    contentBase: `dist`,
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      hash: true,
    }),
  ],
  // ファイルの出力設定
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    alias: {
      "@": `${__dirname}/src`,
      "@hooks": `${__dirname}/src/hooks`,
      "@pages": `${__dirname}/src/pages`,
    },
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  // target: ["web", "es5"],
};
