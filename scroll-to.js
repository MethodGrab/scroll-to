const $ = require( 'jquery' );


module.exports = function animScrollTo( el, duration = 250, padding = 50 ) {

	const dfd          = $.Deferred();
	const $htmlAndBody = $( 'html, body' );

	let offset = el;

	if ( typeof el !== 'number' ) {
		if ( !$( el ).length ) {
			console.warn( '[scrollTo] element %s not found', el );
			return dfd.resolve();
		}

		offset = $( el ).offset().top;
		offset = offset - padding;
	}

	$htmlAndBody.animate({
		scrollTop : offset
	}, duration, function (  ) {
		dfd.resolve();
	});

	return dfd.promise();

};
