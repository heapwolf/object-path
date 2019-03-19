const { get, set } = require('.')
const assert = require('assert')

var o = {
  a: {
    bbb: {
      c: [
        'aa',
        { a: 'bb' },
        'cc'
      ]
    }
  }
}

const path = 'a.bbb.c.1.a'

assert(get(o, path) === 'bb')
assert(set(o, path, 'xx'))
assert(get(o, path) === 'xx')

assert(get(o, 'a.bbb.c.4.a') === false)

assert(!get({ a: {} }, path))
assert(!get(null, path))
assert(!get(undefined, path))
assert(!get(undefined, undefined))

const oo = { a: 0 }
assert(!set(undefined, undefined))
assert(get(oo, 'a') === 0)
assert(set(oo, 'a', 1))
assert(get(oo, 'a') === 1)

const ooo = {}
assert(set(ooo, 'a.b.2.c', 'x'))
assert(get(ooo, 'a.b.2.c') === 'x')

const actual = JSON.stringify(ooo)
const expected = '{"a":{"b":[null,null,{"c":"x"}]}}'
assert(expected === actual)
