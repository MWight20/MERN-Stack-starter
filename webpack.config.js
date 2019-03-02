const webpack = require('webpack');
const path = require('path');

//helper functions
// function root (args){
//   args = Array.prototype.slice.call(arguments, 0);
//   return path.join.apply(path, [__dirname].concat('../', ...args));
// }


module.exports = {
    // entry: './src/index.js',
    // entry: {
    //   'app': [
    //     root('client/app/index.js')
    //   ]
    // },
    entry: './client/app/index.js',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
          'app': 'client/app'
        }
      },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
    devServer: {
      contentBase: './dist',
      hot: true
    }
  };