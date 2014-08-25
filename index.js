module.exports = function(obj, test) {
  var items = []

  recursiveFind(obj)

  return items

  function recursiveFind(obj) {
    if (Array.isArray(obj)) {
      return obj.map(function(item) {
        return recursiveFind(item)
      })
    }

    if (test(obj)) {
      items.push(obj)
    }

    if (typeof obj === 'object') {
      return Object.keys(obj).map(function(key) {
        return recursiveFind(obj[key])
      })
    }
  }
}
