# v-preview-image

一个基于 vue2/vue3 的图片预览插件，可以缩放图片，移动图片，旋转图片，目前只支持 pc 端。

因为之前做管理后台时，经常有图片需要预览，使用 element 的图片预览必须基于它的 image 组件，
我觉得不够方便，所以模仿它的样式封装了这个图片预览插件,可在任何 vue3 的 pc 项目使用。

该预览插件使用非常简单、方便！

如果您使用过程中发现有问题或者可优化的地方都果断提出来！

如果对您有帮助，麻烦给个 Star！

[github]: https://github.com/zhangchuqiang/v-preview-image/tree/2.x

### 该版本为vue2版本，vue3版本请查看master分支文档
[github]: https://github.com/zhangchuqiang/v-preview-image

## npm 安装

```bash
npm install v-preview-image@2.x -S
```

## 在 main.js 引入

```javascript
import vPreviewImage from 'v-preview-image'
Vue.use(vPreviewImage)
```

## 调用方式

可在模板中直接调用

```html
<div @click="$preview(current,list,key)"></div>
```

也可在 js 中通过实例调用:

```javascript
this.$preview(current, list, key)
```

| 参数    | 说明                                                                                  | 类型          |
| ------- | ------------------------------------------------------------------------------------- | ------------- |
| current | 当前预览的图片索引或者 url                                                            | String/Number |
| list    | 需要预览的图片数组，非必传。如果不传的话，current 必须为 url，不能为索引。            | Array         |
| key     | 如果 list 里面的 item 是图片的 url 则不需要，如果是对象的话，需传图片的在对象中的 key | String        |

关闭预览

```javascript
this.$preview.close()
```

修改默认配置

```javascript
// 方式一：在Vue.use时传入配置
import vPreviewImage from 'v-preview-image'
Vue.use(vPreviewImage, { activeColor: 'pink' })

// 方式二：引入方法传入配置
import { setPreviewDefaultOptions } from 'v-preview-image'

setPreviewDefaultOptions({
  enabledMaskClose: false, // 是否开启点击遮罩关闭(默认为true)
  enabledEscClose: false, // 是否开启esc按键关闭(默认为true)
  enabledMouseZoom: false, // 是否开启鼠标滚轮缩放(默认为true)
  activeColor: 'green' // 预览图中选中图片的背景颜色(默认为rgba(239, 84, 78, 0.7))
})
```

### 示例

```html
<template>
  <div class="container">
    <h1>示例：</h1>
    <button @click="$preview(0, list)">第一个参数可传入索引,第二个参数传入需要预览的图片数组</button><br /><br />
    <button @click="$preview(url, list)">第一个参数也可传入url</button><br /><br />
    <button @click="$preview(url)">也可以只传入url，单张图片预览</button><br /><br />
    <button @click="$preview(0, list2, 'url')">如果数组的item是对象的话，则第三个参数要指定图片在对象中的key</button><br /><br />
    <button @click="handleClick">也可通过实例调用</button><br /><br />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        list: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
        ],
        list2: [
          { url: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg' },
          { url: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg' },
          { url: 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg' }
        ]
      }
    },
    methods: {
      handleClick() {
        this.$preview(0, this.list)

        setTimeout(() => {
          // 调用关闭方法
          this.$preview.close()
        }, 2000)
      }
    }
  }
</script>
```
