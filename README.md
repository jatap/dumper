# dumper

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage Status][coveralls-image]][coveralls-url]

> Dumper node module

## Installation

```sh
$ npm install --save-dev dumper
```

## Usage

##### ES5

```js
var debug = require('dumper');

var foo = { bar: 'baz' };

debug.dumper(foo);
```

##### ES6

```js
import {debug} from 'dumper';

let foo = { bar: 'baz' };

dumper(foo);
```
## License

MIT © [Julio Antúnez Tarín](https://github.com/jatap/dumper/blob/master/LICENSE)


[npm-image]: https://badge.fury.io/js/dumper.svg
[npm-url]: https://npmjs.org/package/dumper
[travis-image]: https://travis-ci.org/jatap/dumper.svg?branch=develop
[travis-url]: https://travis-ci.org/jatap/dumper
[daviddm-image]: https://david-dm.org/jatap/dumper.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jatap/dumper
[coveralls-image]: https://coveralls.io/repos/github/jatap/dumper/badge.svg?branch=develop
[coveralls-url]: https://coveralls.io/github/jatap/dumper?branch=develop
