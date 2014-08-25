var test = require('tape')
var recursiveFind = require('../')

test('tests nested objects', function(t) {
  t.plan(4)

  var data = {
    title: 'El Duderino',
    url: 'http://dooder.com',
    about: {url: 'http://dooder.com/about'},
    contact: {url: 'http://dooder.com/contact'},
    google: {url: 'http://google.com'}
  }

  var dooderLinks = recursiveFind(data, function(value) {
    return typeof value === 'string' && value.indexOf('http://dooder.com') >= 0
  })

  t.equal(dooderLinks.length, 3)
  t.equal(dooderLinks[0], data.url)
  t.equal(dooderLinks[1], data.about.url)
  t.equal(dooderLinks[2], data.contact.url)
})

test('tests nested arrays', function(t) {
  t.plan(6)

  var data = {
    title: 'El Duderino',
    url: 'http://dooder.com',
    links: [
      {url: 'http://dooder.com/about'},
      {url: 'http://dooder.com/contact'},
      {
        url: 'http://google.com',
        links: [
          {url: 'http://dooder.com/rug'},
          {url: 'http://dooder.com/help'},
          {url: 'http://pugholdit.herokuapp.com'}
        ]
      },
    ],
  }

  var dooderLinks = recursiveFind(data, function(value) {
    return typeof value === 'string' && value.indexOf('http://dooder.com') >= 0
  })

  t.equal(dooderLinks.length, 5)
  t.equal(dooderLinks[0], data.url)
  t.equal(dooderLinks[1], data.links[0].url)
  t.equal(dooderLinks[2], data.links[1].url)
  t.equal(dooderLinks[3], data.links[2].links[0].url)
  t.equal(dooderLinks[4], data.links[2].links[1].url)
})
