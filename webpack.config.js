const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './client/app/index.js',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          { 
            test: /\.css$/, 
            loader: "style-loader!css-loader" }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx', '.html', '.css', '.json'],
        alias: {
          'app': 'client/app'
        }
      },
    output: {
      path: __dirname + './dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
    devServer: {
      contentBase: './dist',
      historyApiFallback: true,
      hot: true,
      host: 'localhost', //defaults to localhost
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
        }
      }
    }
  };