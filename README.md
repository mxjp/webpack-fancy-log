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
	name: 'example',

	// The output:
	// - If this is a tty stream, it
	//   will display a nice progress bar.
	output: process.stdout
})
```
