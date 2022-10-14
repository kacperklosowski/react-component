const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // generate separate CSS files to the dist folder
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); // allows us to check typescript typings as a separate process; it will improve build performance

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  // devtool: "source-map",
  optimization: {
    usedExports: true,
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, "dist"),
    library: "react-component",
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            // disable type checker - we will use it in fork plugin
            transpileOnly: false,
            // declarations: true
          },
        },
      },
      {
        /* For production build we use MiniCssExtractPlugin to compile styles as separate files,
          for development we will add them directly into the HTML.
        */
        test: /\.(scss|css)$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "index.css",
      chunkFilename: "index.css",
    }),
    // new ForkTsCheckerWebpackPlugin(),
  ],
};
