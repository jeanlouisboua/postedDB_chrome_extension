const path = require('path');

module.exports = {
    entry: {
        background: './background.js'
      },
      output: {
        path: path.join(__dirname, '/build'),
        filename: '[name].bundle.js'
      },
    mode: 'development',
    target: 'web',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
         test:path.join(__dirname, '../'),
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env','@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties','@babel/plugin-transform-runtime'],
              sourceType: 'unambiguous'
            }
           
          }
        }
      ]
    }
} 