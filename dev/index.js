'use strict'

const path = require('path')
const webpack = require('webpack')
const WebpackFancyLog = require('..')

;(async () => {
	const compiler = webpack({
		mode: 'development',
		context: path.resolve(__dirname, '..'),
		entry: path.resolve(__dirname, 'entry.js'),
		output: {
			path: path.resolve(__dirname, 'output'),
			filename: '[name].js'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					use: path.resolve(__dirname, 'slow-loader.js')
				}
			]
		},
		plugins: [
			new WebpackFancyLog({
				name: 'example'
			})
		]
	})

	await new Promise((resolve, reject) => {
		compiler.run(err => (err ? reject : resolve)())
	})
})().catch(err => {
	console.error(err)
	process.exit(1)
})
