# SYNOPSIS
Subset implementation of object-path, `get` and `set` methods.

```bash
npm install heapwolf/object-path
```

# USAGE

```js
const { get, set } = require('object-path')
```

```js
const o = {
  a: {
    b: {
      c: ['foo', 'bar', 'bazz']
    }
  }
}

```js
get(o, 'a.b.c.1') // => 'bar'
get(o, 'a.b.c') // => ['foo', 'bar', 'bazz']
```

```js
set(o, 'a.b.c.0', { x: true })
```

```js
set({}, 'a.b.c.0', { x: true })
```
