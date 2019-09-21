<template>
    <ul v-if="loading && options"
        class="ve-skeleton-paragraph"
        :style="styles">
        <template v-if="isArray(options)">
            <li v-for="(item, index) in options"
                :key="index"
                :style="{width: item.width ? `${item.width}%` : '100%'}"
                :class="{'ve-skeleton-animated': animated}"></li>
        </template>
        <template v-else>
            <li v-for="(item, index) in options.rows"
                :key="index"
                :style="{width: index === options.rows - 1 ? `${options.width}%` : '100%'}"
                :class="{'ve-skeleton-animated': animated}"></li>
        </template>
    </ul>
</template>

<script>
import PropsMixin from '@/mixins/props'
import MethodsMixin from '@/mixins/methods'
import { PARAGRAPH_DEFAULT_OPTIONS } from '../constant'
const COMPONENT_NAME = 've-paragraph'
export default {
  name: COMPONENT_NAME,
  mixins: [PropsMixin, MethodsMixin],
  props: {
    options: {
      type: [Object, Boolean, Array],
      default () {
        return PARAGRAPH_DEFAULT_OPTIONS
      }
    }
  },
  computed: {
    styles () {
      if (!this.options) return {}
      return {}
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/common.less';
.ve-skeleton-paragraph {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 28px;
    background: #fff;
    li {
        margin-top: 12px;
        height: 16px;
        overflow: hidden;
        list-style: none;
        background: @bg;
        border-radius: 2px;
        &:first-child {
            margin-top: 0;
        }
    }
}
</style>
