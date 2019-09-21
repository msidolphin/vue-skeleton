<template>
    <div v-if="loading && options"
        class="ve-skeleton-avatar"
        :class="{'ve-skeleton-animated': animated}"
        :style="styles">
    </div>
</template>

<script>
import PropsMixin from '@/mixins/props'
import { containCssUnit } from '../utils'
import { AVATAR_DEFAULT_OPTIONS } from '../constant'
const COMPONENT_NAME = 've-avatar'
export default {
  name: COMPONENT_NAME,
  mixins: [PropsMixin],
  props: {
    options: {
      type: [Object, Boolean],
      default () {
        return AVATAR_DEFAULT_OPTIONS
      }
    }
  },
  computed: {
    styles () {
      if (!this.options) return {}
      else {
        let opts = Object.assign({}, AVATAR_DEFAULT_OPTIONS, this.options)
        console.log(opts)
        let size = opts.size ? opts.size : 40
        let wh = containCssUnit(size) ? size : `${size}px`
        return {
          width: wh,
          height: wh,
          'border-radius': `${opts.shape === 'circle' ? '50%' : '2px'}`
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/common.less';
</style>
