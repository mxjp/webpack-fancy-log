# Webpack fancy log
A webpack plugin that enables compact fancy logging for development
```bash
npm i webpack-fancy-log
```
```js
const WebpackFancyLog = require('webpack-fancy-log')

new WebpackFancyLog({
	// The name that will be used for logging:
	// - If falsy, no name will be displayed.
	// - By default, no name is used.
	name: 'example',

	// The output:
	// - If this is a tty stream, it
	//   will display a nice progress bar.
	// - Default is process.stdout
	output: process.stdout,

	// True, to output time:
	// - Default is false.
	time: false
})
```
