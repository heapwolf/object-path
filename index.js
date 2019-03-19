const isNumber = s => !isNaN(parseInt(s, 10))

const get = (o = {}, path = '') => {
  const parts = path.split('.')
  let value = o

  for (const p of parts) {
    if (!value) return false
    value = value[p]
  }

  return value
}

const set = (o = {}, path = '', v) => {
  const parts = path.split('.')
  let value = o

  let last = parts.pop()
  if (!last) return

  for (let i = 0; i < parts.length; i++) {
    const p = parts[i]

    if (!value[p]) {
      value[p] = isNumber(parts[i + 1]) ? [] : {}
    }
    value = value[p]
  }

  value[last] = v
  return o
}

module.exports = { get, set }
