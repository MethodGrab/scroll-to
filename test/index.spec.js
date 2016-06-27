import test from 'ava';
import lib from '..';


test( 'should export a function', t => {
	t.is( typeof lib, 'function' );

	t.pass();
});
