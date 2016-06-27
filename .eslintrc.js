module.exports = {
	extends : [
		'@methodgrab/standard',
		'@methodgrab/standard/browser',
		'@methodgrab/standard/es2015',
	],

	globals: {
		'jQuery' : true,
		'$'      : true,
	},

	rules : {
		'no-param-reassign': 0,
	},
};
