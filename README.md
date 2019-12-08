# sort-array-objects

Sort an array of objects by one or several properties, and return a new array.

Note: v3 has breaking changes 🔥

## Usage 🖥

```js
import sort from 'sort-array-objects';

const data = [
  { id: 1, a: 456, b: 635, c: 682 },
  { id: 2, a: 100, b: 99, c: 333 },
  { id: 3, a: 100, b: 238, c: 123 },
];

sort(data, ['a', 'b']);
// ==> [
// {"id":2,"a":100,"b":99,"c":333},
// {"id":3,"a":100,"b":238,"c":123},
// {"id":1,"a":456,"b":635,"c":682},
// ]

sort(data, ['a', 'b'], -1);
// ==> [
// {"id":1,"a":456,"b":635,"c":682},
// {"id":3,"a":100,"b":238,"c":123},
// {"id":2,"a":100,"b":99,"c":333},
// ]
```

## Install 🔌

```
$ npm i -S sort-array-objects
```

## License 🧾

MIT
