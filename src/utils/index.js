function validType (target, t, name) {
  let type = Object.prototype.toString.call(target).replace(/\]/g, '').split(' ')[1]
  /* istanbul ignore next */
  if (Array.isArray(t)) {
    if (t.indexOf(type) === -1) {
      throw new Error(`Invalid parameter: prop "${name}" expected ${t}, got ${type}.`)
    }
    return true
  } else {
    if (type !== t) {
      throw new Error(`Invalid parameter: prop "${name}" expected ${t}, got ${type}.`)
    }
  }
  return true
}

export function containCssUnit (style) {
  if (validType(style, ['String', 'Number'], 'style')) {
    if (Number.isNaN(style) &&
            (style.indexOf('px') || style.indexOf('rem') || style.indexOf('em') || style.indexOf('vw') || style.indexOf('vh') || style.indexOf('%'))) {
      return true
    }
    return false
  }
}

export function isBoolean (target) {
  return typeof target === 'boolean'
}
