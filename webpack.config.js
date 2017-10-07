module.exports = {
	entry: "./app/app.js",

	output: {
		filename: "public/bundle.js"
	},
	module: {
		loaders:[{
			test: /\.jsx?$/,
			include: /app/,
			exclude: /node_modules/,
			loader: "babel-loader",
			query: {
				presets: ["react", "env"] //replace es2015 with env?
			}
		
		}]
	},
	devtool: "eval-source-map"
};
