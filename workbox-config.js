module.exports = {
	globDirectory: "docs/",
	globPatterns: [
		"**/*.{ttf,css,ico,svg,mp3,wav,png,json,html,js,wasm,md,txt,swf,xml,phtml}",
	],
	swDest: "docs/sw.js",
	maximumFileSizeToCacheInBytes: 20000000,
	ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
};
