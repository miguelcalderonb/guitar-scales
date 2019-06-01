# guitar-scales

`guitar-scales` is a javascript modular for get guitar scales. It provides functions to get the scale in differents tones and with the intervals in each strings, also provides a support for diferents tunings, thats include instuments with any number of strings (guitar and bass).

#### [Demo]()

#### [API documentation](http://miguelcalderonbproject.github.io/guitar-scales)

## Examples

Basic usage:

```js
import {GuitarScale} from 'GuitarScales'

let scaleInfo = GuitarScale.get("G", "ionian"); // {info: [ { note: C#, noteEnharmonic: Db, freet: 0, isPartOfScale: false, scalePosition: 1 }, {...}, ]
```

Browser (use the `GuitarScale` global object):

```html
<script>
  console.log(GuitarScale.GuitarScale.get("G", "ionian");
</script>
```