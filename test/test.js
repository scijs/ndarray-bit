"use strict"

var ndbit = require("../ndbits.js")

require("tape")("ndarray-bits", function(t) {

  var x = ndbit([100, 100])
  
  x.set(10, 10, 1)
  
  t.equals(x.get(10, 10), true)

  t.end()
})