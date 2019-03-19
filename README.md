# SYNOPSIS
Subset implementation of object-path, `get` and `set` methods.

# INSTALL

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
```

```js
get(o, 'a.b.c.1') // => 'bar'
get(o, 'a.b.c') // => ['foo', 'bar', 'bazz']
```

```js
set(o, 'a.b.c.0', { x: true }) // => [{ x: true }, 'bar', 'bazz']
```

```js
set({}, 'a.y.2.z', 100) // => { a: { y: [null, null, { z: 100 }] } }
```
