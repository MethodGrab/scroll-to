// const $ = require( 'jquery' );

let $root;


// :: ( el: string, opts: { duration: number, padding: number, altOffsetCalc: bool } ) → Promise
module.exports = ( el, { duration = 250, padding = 50, altOffsetCalc = false } = {} ) => {

	const dfd = $.Deferred();

	if ( !$root ) {
		$root = $( 'html, body' );
	}

	let offset = el;

	if ( typeof el !== 'number' ) {
		if ( !$( el ).length ) {
			console.warn( '[scrollTo] element %s not found', el );
			return dfd.resolve();
		}

		if ( altOffsetCalc ) {
			offset = findYPosition( $( el )[0] );
		} else {
			offset = $( el ).offset().top;
		}

	}

	offset = offset - padding;

	$root.animate({
		scrollTop : offset
	}, duration, (  ) => {
		dfd.resolve();
	});

	return dfd.promise();

};



// :: ( el: DOM Element ) → number
// Find the y- offset of an element.
// Alternative way to calculate the offsetTop
// that works even if `html` & `body` are fixed at `height: 100%;`
// which means `offset().top` changes with scroll position and
// `scrollTop` is always `0`
// http://stackoverflow.com/a/11986153/6155318
function findYPosition( el ) {
	let curtop = 0;

	if ( el.offsetParent ) {
		do {
			curtop += el.offsetTop;
		} while (( el = el.offsetParent ));
	}

	return curtop;
}
