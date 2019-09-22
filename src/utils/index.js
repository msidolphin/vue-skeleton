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
    if (typeof style === 'string' &&
            (style.indexOf('px') !== -1 || style.indexOf('rem') !== -1 || style.indexOf('em') !== -1 || style.indexOf('vw') !== -1 || style.indexOf('vh') !== -1 || style.indexOf('%') !== -1)) {
      return true
    }
    return false
  }
}

export function isBoolean (target) {
  return typeof target === 'boolean'
}
