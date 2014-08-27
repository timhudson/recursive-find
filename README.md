recursive-find
==============

Recursively find values of an object that match a test function

```
npm install recursive-find
```

[![build status](http://img.shields.io/travis/timhudson/recursive-find.svg?style=flat)](http://travis-ci.org/timhudson/recursive-find)

example
-------

``` js
var recursiveFind = require('recursive-find')

var data = {
  title: 'El Duderino',
  url: 'http://dooder.com',
  links: [
    {url: 'http://dooder.com/about'},
    {url: 'http://dooder.com/contact'},
    {url: 'http://google.com'}
  ],
}

var urls = recursiveFind(data, function(value) {
  return typeof value === 'string' && value.indexOf('http://dooder.com') >= 0
})

console.log(urls)
// [ 'http://dooder.com',
//   'http://dooder.com/about',
//   'http://dooder.com/contact' ]
```

license
-------

MIT
