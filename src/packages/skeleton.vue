<template>
    <div class="ve-skeleton">
        <template v-if="loading">
            <template v-if="isLeft">
                <div class="ve-skeleton-header" v-if="avatar" :style="commonStyles">
                    <ve-avatar :options="_avatar" :loading="loading" :animated="animated"/>
                </div>
                <div class="ve-skeleton-content" :style="commonStyles">
                    <ve-title :options="_title" :loading="loading" :animated="animated"/>
                    <ve-paragraph :options="_paragraph" :loading="loading" :animated="animated"/>
                </div>
            </template>
            <template v-else>
                <div class="ve-skeleton-content" :style="commonStyles">
                    <ve-title :options="_title" :loading="loading" :animated="animated"/>
                    <ve-paragraph :options="_paragraph" :loading="loading" :animated="animated"/>
                </div>
                <div class="ve-skeleton-header" :class="{'is-right': !isLeft}" v-if="avatar" :style="commonStyles">
                    <ve-avatar :options="_avatar" :loading="loading" :animated="animated"/>
                </div>
            </template>
        </template>
        <slot v-else/>
    </div>
</template>

<script>
import VeAvatar from '../components/avatar'
import VeTitle from '../components/title'
import VeParagraph from '../components/paragraph'
import { PARAGRAPH_DEFAULT_OPTIONS, TITLE_DEFAULT_OPTIONS, AVATAR_DEFAULT_OPTIONS } from '../constant'
import { isBoolean } from '../utils'
import PropsMixin from '@/mixins/props'
const COMPONENT_NAME = 've-skeleton'
export default {
  name: COMPONENT_NAME,
  mixins: [PropsMixin],
  components: {
    VeAvatar,
    VeTitle,
    VeParagraph
  },
  props: {
    avatar: {
      type: [Object, Boolean]
    },
    title: {
      type: [Object, Boolean],
      default: true
    },
    paragraph: {
      type: [Object, Boolean, Array],
      default: true
    },
    verticalAlign: {
      type: String,
      default: 'top' // top | middle | bottom
    },
    align: {
      type: String,
      default: 'left' // left | right
    }
  },
  computed: {
    _avatar () {
      if (isBoolean(this.avatar)) {
        if (this.avatar) return AVATAR_DEFAULT_OPTIONS
        return false
      } else {
        return this.avatar
      }
    },
    _title () {
      if (isBoolean(this.title)) {
        if (this.title) return TITLE_DEFAULT_OPTIONS
        return false
      } else {
        return this.title
      }
    },
    _paragraph () {
      if (isBoolean(this.paragraph)) {
        if (this.paragraph) return PARAGRAPH_DEFAULT_OPTIONS
        return false
      } else {
        return this.paragraph
      }
    },
    commonStyles () {
      return {
        'vertical-align': this.verticalAlign ? this.verticalAlign : 'top'
      }
    },
    isLeft () {
      return this.align === 'left'
    }
  }
}
</script>

<style lang="less" scoped>
.ve-skeleton {
    display: table;
    width: 100%;
    &-header {
        display: table-cell;
        padding-right: 16px;
        vertical-align: top;
        &.is-right {
            padding-right: 0;
            padding-left: 16px;
        }
    }
    &-content {
        display: table-cell;
        vertical-align: top;
        width: 100%;
    }
}
</style>
