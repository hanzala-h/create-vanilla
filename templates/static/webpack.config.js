const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

const dirApp = path.join(__dirname, "src/app");
const dirShared = path.join(__dirname, "src/shared");
const dirStyles = path.join(__dirname, "src/styles");
const dirNode = "node_modules";

module.exports = {
  entry: [path.join(dirApp, "index.js"), path.join(dirStyles, "index.scss")],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: IS_DEVELOPMENT ? "[name].js" : "[name].[contenthash].js",
    publicPath: "/",
  },
  resolve: { modules: [dirApp, dirShared, dirStyles, dirNode] },
  plugins: [
    new webpack.DefinePlugin({ IS_DEVELOPMENT }),
    new CopyWebpackPlugin({ patterns: [{ from: "./src/shared", to: "" }] }),
    new MiniCssExtractPlugin({
      filename: IS_DEVELOPMENT ? "[name].css" : "[name].[contenthash].css",
      chunkFilename: IS_DEVELOPMENT ? "[id].css" : "[id].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/views', 'index.html'),
      minify: !IS_DEVELOPMENT ? {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      } : false,
    }),
    new WebpackManifestPlugin({
      fileName: 'manifest.json',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"] },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|mp4)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[hash][ext][query]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
      {
        test: /\.(glsl|vs|fs|vert|frag)$/i,
        use: 'webpack-glsl-loader',
      },
    ],
  },
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin(IS_DEVELOPMENT ? {} : {
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  },
};
