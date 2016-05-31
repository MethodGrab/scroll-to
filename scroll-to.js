const $ = require( 'jquery' );


module.exports = function animScrollTo( el, _duration, _padding ) {

	const dfd          = $.Deferred();
	const $htmlAndBody = $( 'html, body' );

	let offset = el;
	const duration = typeof _duration === 'undefined' ? 250 : _duration;
	const padding  = typeof _padding === 'undefined' ? 50 : _padding;

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
