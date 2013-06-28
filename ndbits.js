"use strict"

var ndarray = require("ndarray")
var BitArray = require("minimal-bit-array")

function createNDBitArray(shape) {
  var sz = 1
  for(var i=0; i<shape.length; ++i) {
    sz *= shape[i]
  }
  return ndarray(new BitArray(sz), shape)
}

module.exports = createNDBitArray