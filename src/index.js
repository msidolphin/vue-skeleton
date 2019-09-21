import packageJson from '../package.json'
import Skeleton from './packages/skeleton'

Skeleton.install = Vue => {
  Vue.component(Skeleton.name, Skeleton)
}

const components = {
  Skeleton
}

function install (Vue, options = {}) {
  for (let name in components) {
    if (typeof components[name].install === 'function') components[name].install(Vue, options)
    else Vue.component(components[name], options)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: packageJson.version,
  install,
  Skeleton
}

export {
  Skeleton
}
