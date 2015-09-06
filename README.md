<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> [useref](https://github.com/digisfera/useref) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][mit-badge]][mit]

## Usage
> Check out the [documentation](https://github.com/digisfera/useref) to see the available options.

### Install

```a
npm install -D fly-useref
```

### Example

Check [Flyfile.js](https://github.com/kashiro/fly-useref/blob/master/Flyfile.js) and [test](https://github.com/kashiro/fly-useref/blob/master/test) directory :)

```js
yield this.clear("test/index.html")
yield this
  .source("test/src/index.html")
  .useref()
  .target("test")
```

before

```html
<html>
<head>
  <!-- build:css css/combined.css -->
  <link href="css/one.css" rel="stylesheet">
  <link href="css/two.css" rel="stylesheet">
  <!-- endbuild -->
</head>
<body>
  <!-- build:js scripts/combined.js -->
  <script type="text/javascript" src="scripts/one.js"></script>
  <script type="text/javascript" src="scripts/two.js"></script>
  <!-- endbuild -->

  <!-- build:js scripts/async.js async data-foo="bar" -->
  <script type="text/javascript" src="scripts/three.js"></script>
  <script type="text/javascript" src="scripts/four.js"></script>
  <!-- endbuild -->
</body>
</html>
```

after

```html
<html>
<head>
  <link rel="stylesheet" href="css/combined.css">
</head>
<body>
  <script src="scripts/combined.js"></script>

  <script src="scripts/async.js" async data-foo="bar"></script>
</body>
</html>
```

# License

[MIT][mit] © [Tomoyuki Kashiro][author] et [al][contributors]


[mit]:          http://opensource.org/licenses/MIT
[author]:       http://tomoyukikashiro.me
[contributors]: https://github.com/kashiro/fly-useref/graphs/contributors
[releases]:     https://github.com/kashiro/fly-useref/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-useref
[npm-ver-link]: https://img.shields.io/npm/v/fly-useref.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-useref.svg?style=flat-square
[travis-link]:  https://travis-ci.org/kashiro/fly-useref
[travis-badge]: http://img.shields.io/travis/kashiro/fly-useref.svg?style=flat-square
