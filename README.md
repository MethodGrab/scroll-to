# Scroll To

A wrapper around `jQuery.animate()` to scroll the page to a specific element.


## Example
```js
const scroll2 = require( 'scroll-to' );

$( '.btn' ).on( 'click', function( e ) {
	scroll2( '.some-element' );
});
```


## API
`scroll2( selector, duration, padding )`

### `selector`
The CSS selector of an element.

### `duration`
The scroll duration.

### `padding`
An additional value, in px, to add to the scroll offset.  
Useful to avoid scrolling to content under fixed headers etc.
