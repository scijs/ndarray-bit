ndarray-bit
===========
An [ndarray](https://github.com/mikolalysenko/ndarray) of bits.

## Example

```javascript
var ndbits = require("ndarray-bit")

//Create a 100x100 bit mask
var x = ndbits([100, 100])

x.set(1, 10, true)

x.get(1, 10) //Returns true
```

## Install

```sh
npm install ndarray-bit
```

### `require("ndarray-bit")(shape)`
Creates an ndarray of bits initialized to shape.

* `shape` is the shape of the bit array

**Returns** An ndarray of bits.  The underlying store is an instance of [`minimal-bit-array`](https://github.com/mikolalysenko/minimal-bit-array).

## Credits
(c) 2013 Mikola Lysenko. MIT License