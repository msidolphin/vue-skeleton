<template>
    <div v-if="loading && options"
        class="ve-skeleton-title"
        :class="{'ve-skeleton-animated': animated}"
        :style="styles">
    </div>
</template>

<script>
import PropsMixin from '@/mixins/props'
import { containCssUnit } from '../utils'
import { TITLE_DEFAULT_OPTIONS } from '../constant'
const COMPONENT_NAME = 've-title'
export default {
  name: COMPONENT_NAME,
  mixins: [PropsMixin],
  props: {
    options: {
      type: [Object, Boolean],
      default () {
        return TITLE_DEFAULT_OPTIONS
      }
    }
  },
  computed: {
    styles () {
      if (!this.options) return {}
      else {
        let width = this.options.width ? this.options.width : 38
        return {
          width: containCssUnit(width) ? width : `${width}%`
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/common.less';
.ve-skeleton-title {
    background: @bg;
    height: 16px;
    border-radius: 2px;
    margin-top: 16px;
}
</style>
