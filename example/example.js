var recursiveFind = require('../')

var data = {
  title: 'El Duderino',
  url: 'http://dooder.com',
  links: [
    {url: 'http://dooder.com/about'},
    {url: 'http://dooder.com/contact'},
    {url: 'http://google.com'}
  ],
}

var dooderLinks = recursiveFind(data, function(value) {
  return typeof value === 'string' && value.indexOf('http://dooder.com') >= 0
})

console.log(dooderLinks)
