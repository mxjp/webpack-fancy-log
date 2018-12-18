'use strict'

const chalk = require('chalk')
const webpack = require('webpack')
const Progress = require('cprog')

module.exports = class WebpackFancyLog {
	constructor(options) {
		this.options = options
	}

	apply(compiler) {
		const {options} = this
		const name = options.name ? ' ' + options.name : ''
		const output = options.output || process.stdout
		const prefix = options.time ? () => `[${new Date().toLocaleTimeString()}] ` : () => ''

		let progress
		if (output.isTTY) {
			progress = new Progress({
				render: Progress.barWithText(`Compiling${name}...`, {
					barColor: chalk.bgGreen.white,
					color: chalk.green
				})
			})
			new webpack.ProgressPlugin(value => {
				if (value < 1) {
					progress.update(value)
				} else {
					progress.dispose()
				}
			}).apply(compiler)
		}

		compiler.hooks.done.tapPromise('webpack-fancy-log', async stats => {
			if (progress) {
				progress.dispose()
			}
			const data = stats.toJson()

			console.log(`${prefix()}Compiled${name} // ${data.warnings.length} warning(s), ${data.errors.length} error(s)`)
			for (const msg of data.warnings) {
				console.warn(chalk.yellow(msg))
			}
			for (const msg of data.errors) {
				console.error(chalk.red(msg))
			}
		})
	}
}
