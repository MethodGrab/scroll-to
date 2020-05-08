module.exports = {
	extends : [
		'@methodgrab/standard',
		'@methodgrab/standard/browser',
		'@methodgrab/standard/esnext',
	],

	globals: {
		'jQuery' : true,
		'$'      : true,
	},

	rules : {
		'no-param-reassign': 0,
	},
};
