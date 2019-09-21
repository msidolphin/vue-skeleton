# vue-skeleton


> A simple skeleton component powered by vue.js

## Usage

### Install

```bash
npm install ve-skeleton -S
```

### Import
```js
import VueSkeleton from 've-skeleton'
import 've-skeleton/index.css';

Vue.use(VueSkeleton)
```

### Use
```vue
<template>
  <div id="app">
    <ve-skeleton avatar/>
    <ve-skeleton/>
    <ve-skeleton avatar vertical-align="middle" :title="{width: 80}" :paragraph="{rows: 4, width: 61}"/>
    <ve-skeleton :loading="loading" :avatar="{size: 100}" vertical-align="middle" :title="{width: 80}" :paragraph="{rows: 4, width: 61}">
      <div class="demo">
        <div class="demo-left">
          <img src="./avatar.jpg"/>
        </div>
        <div class="demo-right">
          <div class="title">vue-skeleton</div>
          <ul class="paragraph">
            <li>a simple skeleton component powered by vue.js</li>
            <li>a simple skeleton component powered by vue.js</li>
            <li>a simple skeleton component powered by vue.js</li>
          </ul>
        </div>
      </div>
    </ve-skeleton>
    <button style="margin-top: 20px;" @click="toggle">toggle</button>
  </div>
</template>

<script>
import VeAvatar from '../src/components/avatar'
import VeTitle from '../src/components/title'
import VeParagraph from '../src/components/paragraph'
export default {
  name: 'App',
  components: {
    VeAvatar,
    VeTitle,
    VeParagraph
  },
  data () {
    return {
      loading: true
    }
  },
  methods: {
    toggle () {
      this.loading = !this.loading
    }
  }
}
</script>

<style lang="less">
.demo {
  display: table;
  width: 100%;
  &-left {
    display: table-cell;
    padding-right: 16px;
    vertical-align: middle;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  &-right {
    display: table-cell;
    width: 100%;
    vertical-align: middle;
    .title {
      margin-top: 16px;
    }
    ul {
      margin: 0;
      padding: 0;
      margin-top: 28px;
      li {
        margin-top: 12px;
        list-style: none;
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
}

</style>

```

## Props

## ve-skeleton
| Attribute | Type | Description | Default | Accepted values |
| :------ | :------ | :------ | --- | :---: |
| loading | `boolean` | display the skeleton when `true` | true | - |
| animated | `boolean` | animation effect | true | - |
| avatar | `boolean`, `object` | show avatar placeholder | false | - |
| title | `boolean`, `object` | show title placeholder | true | - |
| paragraph | `boolean`, `object`, `array` | show paragraph placeholder | true  | - |
| verical-align | `string` | verical alignment | top | top, middle, bottom |
| align | `string` | avatar placement | left | left, right |

## avatar
| Attribute | Type | Description | Default | Accepted values |
| :------ | :------ | :------ | --- | :---: |
| size | `number`, `string` | the size of avatar | 40 | - |
| shape | `string` | the shape of avatar | circle | circle, square |

## title
| Attribute | Type | Description | Default | Accepted values |
| :------ | :------ | :------ | --- | :---: |
| width | `number`, `string` | the width of title | 38 | - |

## paragraph

> When paragraph is an `Array`, every elements have width config

| Attribute | Type | Description | Default | Accepted values |
| :------ | :------ | :------ | --- | :---: |
| rows | `number` | the row count of paragraph  | 3 | - |
| width | `number` | width of a paragraph. when paragraph is a `Object`, it can only set the last row width  | 61 | -  |

## Slots
| Attribute | Description 
| :------: | :------ |
| - | displayed sub component when `loading` is `false`  |

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright © 2019-present, msidolphin
