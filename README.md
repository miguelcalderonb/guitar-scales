# guitar-scales

`guitar-scales` is a javascript modular for get guitar scales. It provides functions to get the scale in differents tones and with the intervals in each strings, also provides a support for diferents tunings, thats include instuments with any number of strings (guitar and bass).


#### [API documentation](https://miguelcalderonb.github.io/guitar-scales/)

## Examples

Basic usage:

ES5
```js
var gs = require("guitar-scales");
console.log(gs.GuitarScale.get('c', 'ionian')); // {info: {GuitarAllStrings}, tuning: [ 'E', 'A', 'D', 'G', 'B', 'E' ], fretzNumber: 12]
```

ES6
```js
import {GuitarScale} from 'GuitarScales'

let scaleInfo = GuitarScale.get("G", "ionian");  // {info: {GuitarAllStrings}, tuning: [ 'E', 'A', 'D', 'G', 'B', 'E' ], fretzNumber: 12]
```

Browser (use the `GuitarScale` global object):

```html
<script>
  console.log(GuitarScale.GuitarScale.get("G", "ionian"); // {info: {GuitarAllStrings}, tuning: [ 'E', 'A', 'D', 'G', 'B', 'E' ], fretzNumber: 12]
</script>
```

Extensions modules:

Print

ES5
```js
var gs = require("guitar-scales");

let printConsoleLog = new gs.PrintConsoleLog();
printConsoleLog.print((gs.GuitarScale.get('c', 'ionian'))); // =>
// Fretz          |  0  1  2  3  4  5  6  7  8  9  10   11
//                 ----------------------------------------
// E              |  3  4  X  5  X  6  X  7  1  X  2    X
// B              |  7  1  X  2  X  3  4  X  5  X  6    X
// G              |  5  X  6  X  7  1  X  2  X  3  4    X
// D              |  2  X  3  4  X  5  X  6  X  7  1    X
// A              |  6  X  7  1  X  2  X  3  4  X  5    X
// E              |  3  4  X  5  X  6  X  7  1  X  2    X
```

ES6
```js
import {GuitarScale, PrintConsoleLog} from 'GuitarScales'

let printConsoleLog = new PrintConsoleLog();
printConsoleLog.print((gs.GuitarScale.get('c', 'ionian'))); // =>
// Fretz          |  0  1  2  3  4  5  6  7  8  9  10   11
//                 ----------------------------------------
// E              |  3  4  X  5  X  6  X  7  1  X  2    X
// B              |  7  1  X  2  X  3  4  X  5  X  6    X
// G              |  5  X  6  X  7  1  X  2  X  3  4    X
// D              |  2  X  3  4  X  5  X  6  X  7  1    X
// A              |  6  X  7  1  X  2  X  3  4  X  5    X
// E              |  3  4  X  5  X  6  X  7  1  X  2    X
```

Browser (use the `GuitarScale` global object):

```html
<script>
  let printConsoleLog = new GuitarScale.PrintConsoleLog();
  printConsoleLog.print(GuitarScale.GuitarScale.get("c", "ionian")); // =>
// Fretz          |  0  1  2  3  4  5  6  7  8  9  10   11
//                 ----------------------------------------
// E              |  3  4  X  5  X  6  X  7  1  X  2    X
// B              |  7  1  X  2  X  3  4  X  5  X  6    X
// G              |  5  X  6  X  7  1  X  2  X  3  4    X
// D              |  2  X  3  4  X  5  X  6  X  7  1    X
// A              |  6  X  7  1  X  2  X  3  4  X  5    X
// E              |  3  4  X  5  X  6  X  7  1  X  2    X
</script>
```

## Install

Using yarn: `yarn add guitar-scales` (or a single module: `yarn add guitar-scales`)

Using npm: `npm install --save guitar-scales` (or: `npm install --save guitar-scales`)

Browser: 

UNPKG 
https://unpkg.com/guitar-scales@1.0.0/dist/guitar-scales.min.js

Github Revision - grab the minified file [here](https://github.com/miguelcalderonb/guitar-scales/blob/master/dist/guitar-scales.min.js) and include it in your html page (use a `GuitarScales` global object)

```html
<script src="https://unpkg.com/guitar-scales@1.0.0/dist/guitar-scales.min.js"></script>
```

## Thanks

This library use Tonal Library for all the music theory, thanks for that!
-Tonal library: https://github.com/danigb/tonal

## License

MIT License