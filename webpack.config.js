const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const path = require("path");

module.exports = {
 entry: path.join(__dirname, "src", "index.js"),
 output: {
  path: path.join(__dirname, "dist"),
  filename: "index.[contenthash].js",
  assetModuleFilename: path.join("images", "[name].[contenthash][ext]"),
 },
 module: {
  rules: [
   {
    test: /\.js$/,
    use: "babel-loader",
    exclude: /node_modules/,
   },
   {
    test: /\.html$/i,
    loader: "html-loader",
   },
   {
    test: /\.(scss|css)$/,
    use: [
     MiniCssExtractPlugin.loader,
     "css-loader",
     "postcss-loader",
     "sass-loader",
    ],
   },
   {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
    generator: {
     filename: "images/[name]-[hash][ext]",
    },
   },
   {
    test: /\.svg$/i,
    type: "asset/resource",
    generator: {
     //  filename: path.join("images", "[name].[contenthash][ext]"),
     filename: path.join("images", "[name][ext]"),
    },
   },
   {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
    generator: {
     filename: "fonts/[name]-[hash][ext]",
    },
   },
  ],
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: path.join(__dirname, "src", "index.html"),
   filename: "index.html",
  }),
  new FileManagerPlugin({
   events: {
    onStart: {
     delete: ["dist"],
    },
    onEnd: {
     copy: [
      {
       source: path.join("src", "static"),
       destination: "dist",
      },
     ],
    },
   },
  }),
  new MiniCssExtractPlugin({
   filename: "[name].[contenthash].css",
  })
 ],
 devServer: {
  watchFiles: path.join(__dirname, "src"),
  port: 9000,
 },
 optimization: {
  minimizer: [
   new ImageMinimizerPlugin({
    minimizer: {
     implementation: ImageMinimizerPlugin.imageminMinify,
     options: {
      plugins: [
       ["gifsicle", { interlaced: true }],
       ["jpegtran", { progressive: true }],
       ["optipng", { optimizationLevel: 5 }],
       ["svgo", { name: "preset-default" }],
      ],
     },
    },
   }),
  ],
 },
};
