const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  stats: {
    builtAt: true,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: [
          path.resolve(__dirname, './images'),
        ],
        type: "asset/resource",
      },
	  {  
		test: /\.js$/,  
		exclude: /node_modules/,  
		use: {  
			loader: 'babel-loader',  
			options: {  
				presets: ['@babel/preset-env']  
			}  
		}  
	  }
    ],
  }
}
