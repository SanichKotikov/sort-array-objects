Sorts objects of an array by property(ies).

## Install

```
$ npm i sort-array-objects --save
```

## Usage

```js
import sortArrayObjects { ASC, DESC } from 'sort-array-objects';

const arr = [
    { id: 1, a: 456, b: 635, c: 682 },
    { id: 2, a: 100, b: 99, c: 333 },
    { id: 3, a: 100, b: 238, c: 123 },
];

sortArrayObjects(arr, DESC, 'a', 'c');

```

## License

MIT
