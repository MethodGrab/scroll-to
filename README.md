# Scroll To
> A wrapper around `jQuery.animate()` to scroll the page to a specific element.


## Install
```bash
npm install --save MethodGrab/scroll-to
```


## Examples:
```js
const scroll2 = require( 'scroll-to' );

$( '.btn' ).on( 'click', function( e ) {
	scroll2( '.some-element' );
});
```

```js
const scroll2 = require( 'scroll-to' );

$( '.btn' ).on( 'click', function( e ) {
	scroll2( '.some-element', { duration: 1000, padding: 5 } );
	.then((  ) => {
		console.log( 'Done!' );
	})
});
```


## API
`scroll2( selector, { duration, padding } )`  
Returns a Promise that resolves when the scroll completes

### `selector`
`String`  
The CSS selector of an element.

### `options.duration`
`Number` (default: `250`)  
The scroll duration in ms.

### `options.padding`
`Number` (default: `50`)  
An additional value, in px, to add to the scroll offset.  
Useful to avoid scrolling to content under fixed headers etc.
