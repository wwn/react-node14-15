const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, 'src', 'index.jsx'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.bundle.js'
	},

	devtool: 'source-map',

	mode: 'development',

	resolve: {
		extensions: [".js", ".jsx"],
		modules: [path.resolve(__dirname, 'src'), 'node_modules']
	},

	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 3333,
		historyApiFallback: true,
		contentBase: './'
	},

	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['@babel/plugin-proposal-class-properties']
					}
				}
			},
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				use: 'file-loader'
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
			title: 'git remote add origin https://github.com/wwn/react-node14-15.git'
		}),
		new ESLintPlugin({
			extensions: ['js', 'mjs', 'jsx']
		})
	]
};
