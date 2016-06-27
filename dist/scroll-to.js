(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.scroll2 = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// const $ = require( 'jquery' );

var $root = void 0;

// :: ( el: string, opts: { duration: number, padding: number, altOffsetCalc: bool } ) → Promise
module.exports = function (el) {
	var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	var _ref$duration = _ref.duration;
	var duration = _ref$duration === undefined ? 250 : _ref$duration;
	var _ref$padding = _ref.padding;
	var padding = _ref$padding === undefined ? 50 : _ref$padding;
	var _ref$altOffsetCalc = _ref.altOffsetCalc;
	var altOffsetCalc = _ref$altOffsetCalc === undefined ? false : _ref$altOffsetCalc;


	var dfd = $.Deferred();

	if (!$root) {
		$root = $('html, body');
	}

	var offset = el;

	if (typeof el !== 'number') {
		if (!$(el).length) {
			console.warn('[scrollTo] element %s not found', el);
			return dfd.resolve();
		}

		if (altOffsetCalc) {
			offset = findYPosition($(el)[0]);
		} else {
			offset = $(el).offset().top;
		}
	}

	offset = offset - padding;

	$root.animate({
		scrollTop: offset
	}, duration, function () {
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
function findYPosition(el) {
	var curtop = 0;

	if (el.offsetParent) {
		do {
			curtop += el.offsetTop;
		} while (el = el.offsetParent);
	}

	return curtop;
}

},{}]},{},[1])(1)
});