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
