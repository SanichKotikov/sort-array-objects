Sorts objects of an array by specified property, or second property if first are equal.   
Note: second property has default value = 'id';

This method sorts _in place_ and returns the array.

## Install

```
$ npm i sort-array-objects --save
```

## Usage

```js
import sort, { ASC, DESC } from 'sort-array-objects';

const arr = [
    { id: 1, a: 456, b: 635, c: 682 },
    { id: 2, a: 100, b: 99, c: 333 },
    { id: 3, a: 100, b: 238, c: 123 },
];

const props = ['a', 'b'];

sort(arr, props, DESC);
// ==> [
// {"id":2,"a":100,"b":99,"c":333},
// {"id":3,"a":100,"b":238,"c":123},
// {"id":1,"a":456,"b":635,"c":682}
// ]
```

If you need a new array, you may do something like this:

```js
const newArr = sort([..arr], props, DESC);
```

## License

MIT
