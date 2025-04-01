<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# muladd

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Perform a multiply-add operation involving three double-precision complex floating-point numbers.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
muladd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-base-mul-add@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var muladd = require( 'path/to/vendor/umd/complex-float64-base-mul-add/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-base-mul-add@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.muladd;
})();
</script>
```

#### muladd( alpha, x, y )

Performs a multiply-add operation involving three double-precision complex floating-point numbers.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var z1 = new Complex128( 5.0, 3.0 );
var z2 = new Complex128( -2.0, 1.0 );
var z3 = new Complex128( 7.0, -8.0 );

// Compute `alpha*x + y`:
var v = muladd( z1, z2, z3 );
// returns <Complex128>

var re = real( v );
// returns -6.0

var im = imag( v );
// returns -9.0
```

The function supports the following parameters:

-   **alpha**: first [complex number][@stdlib/complex/float64/ctor]
-   **x**: second [complex number][@stdlib/complex/float64/ctor].
-   **y**: third [complex number][@stdlib/complex/float64/ctor].

#### muladd.assign( ar, ai, xr, xi, yr, yi, out, strideOut, offsetOut )

Performs a multiply-add operation involving three double-precision complex floating-point numbers and assigns the results to an output strided array.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var out = new Float64Array( 2 );
var v = muladd.assign( 5.0, 3.0, -2.0, 1.0, 7.0, -8.0, out, 1, 0 );
// returns <Float64Array>[ -6.0, -9.0 ]

var bool = ( out === v );
// returns true
```

The function supports the following parameters:

-   **ar**: real component of the first complex number.
-   **ai**: imaginary component of the first complex number.
-   **xr**: real component of the second complex number.
-   **xi**: imaginary component of the second complex number.
-   **yr**: real component of the third complex number.
-   **yi**: imaginary component of the third complex number.
-   **out**: output array.
-   **strideOut**: stride length for `out`.
-   **offsetOut**: starting index for `out`.

#### muladd.strided( alpha, sa, oa, x, sx, ox, y, sy, oy, out, so, oo )

Performs a multiply-add operation involving three double-precision complex floating-point numbers stored in real-valued strided array views and assigns results to a provided strided output array.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var z1 = new Float64Array( [ 5.0, 3.0 ] );
var z2 = new Float64Array( [ -2.0, 1.0 ] );
var z3 = new Float64Array( [ 7.0, -8.0 ] );
var out = new Float64Array( 2 );

var v = muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, out, 1, 0 );
// returns <Float64Array>[ -6.0, -9.0 ]

var bool = ( out === v );
// returns true
```

The function supports the following parameters:

-   **alpha**: first complex number strided array view.
-   **sa**: stride length for `alpha`.
-   **oa**: starting index for `alpha`.
-   **x**: second complex number strided array view.
-   **sx**: stride length for `x`.
-   **ox**: starting index for `x`.
-   **y**: third complex number strided array view.
-   **sy**: stride length for `y`.
-   **oy**: starting index for `y`.
-   **out**: output array.
-   **so**: stride length for `out`.
-   **oo**: starting index for `out`.

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript">
(function () {.factory;
var muladd = require( '@stdlib/complex-float64-base-mul-add' );

var rand = discreteUniform( -50, 50 );

var z1;
var z2;
var z3;
var i;
for ( i = 0; i < 100; i++ ) {
    z1 = new Complex128( rand(), rand() );
    z2 = new Complex128( rand(), rand() );
    z3 = muladd( z1, z2, z2 );
    console.log( '(%s)*(%s) + (%s) = %s', z1.toString(), z2.toString(), z2.toString(), z3.toString() );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/complex-float64-base-mul-add.svg
[npm-url]: https://npmjs.org/package/@stdlib/complex-float64-base-mul-add

[test-image]: https://github.com/stdlib-js/complex-float64-base-mul-add/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/complex-float64-base-mul-add/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/complex-float64-base-mul-add/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/complex-float64-base-mul-add?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/complex-float64-base-mul-add.svg
[dependencies-url]: https://david-dm.org/stdlib-js/complex-float64-base-mul-add/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/complex-float64-base-mul-add/tree/deno
[deno-readme]: https://github.com/stdlib-js/complex-float64-base-mul-add/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/complex-float64-base-mul-add/tree/umd
[umd-readme]: https://github.com/stdlib-js/complex-float64-base-mul-add/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/complex-float64-base-mul-add/tree/esm
[esm-readme]: https://github.com/stdlib-js/complex-float64-base-mul-add/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/complex-float64-base-mul-add/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/complex-float64-base-mul-add/main/LICENSE

[@stdlib/complex/float64/ctor]: https://github.com/stdlib-js/complex-float64-ctor/tree/umd

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
