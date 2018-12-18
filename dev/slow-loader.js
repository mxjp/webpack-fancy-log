'use strict'

/*
	This is a loader that slows down webpack to better
	visualize the progress bar in the dev example.
*/
module.exports = function(content, map, meta) {
	const cb = this.async()
	setTimeout(() => cb(null, content, map, meta), 1000)
}
