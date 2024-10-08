<template>
  <div v-if="show" class="preview-wrap" @mousewheel="handerMousewheel">
    <div class="preview" @click="handleClickMask">
      <img
        class="preview-content"
        :src="currentImg"
        :style="{ top: imgTop + 'px', left: imgLeft + 'px', transform: `scale(${imgScale}) rotateZ(${imgRotate}deg)`, ...defaultOptions.previewStyle }"
        @click.stop="preventDefault"
        @mousedown="handleMoveStart"
      />
      <div class="preview-footer" @click.stop="preventDefault">
        <ul class="preview-footer-tools">
          <li class="icon-btn" v-if="imgList.length" @click="handleCut('last')"><img src="./assets/arrow-left.png" /></li>
          <li class="icon-btn" @click="handleRotate('left')"><img src="./assets/refresh-left.png" /></li>
          <li class="icon-btn" @click="handleScale('reduce')"><img src="./assets/reduce.png" /></li>
          <li class="icon-btn" @click="imgScale = 1"><img src="./assets/real-size.png" /></li>
          <li class="icon-btn" @click="handleScale('add')"><img src="./assets/add.png" /></li>
          <li class="icon-btn" @click="handleRotate('right')"><img src="./assets/refresh-right.png" /></li>
          <li class="icon-btn" v-if="imgList.length" @click="handleCut('next')"><img src="./assets/arrow-right.png" /></li>
        </ul>
        <template v-if="imgList.length">
          <div class="preview-footer-thumbs">
            <div
              v-for="(item, index) in imgList"
              :id="'thumb-item-' + index"
              :key="index"
              class="thumb-item"
              :style="{ background: currentIndex === index ? defaultOptions.activeColor : '' }"
              @click="handleClickThumb(item, index)"
            >
              <img :src="imgKey ? item[imgKey] : item" />
            </div>
          </div>
          <div class="preview-footer-indexs">{{ currentIndex + 1 }} / {{ imgList.length }}</div>
        </template>
      </div>
      <span class="close-btn icon-btn" @click="show = false">
        <img src="./assets/close.png" />
      </span>
      <span v-if="defaultOptions.showDownloadBtn" class="download-btn icon-btn" @click.stop="downloadFile(currentImg)">
        <img src="./assets/download.png" />
      </span>
    </div>
  </div>
</template>

<script>
import { downloadFile } from './util'
export default {
  data() {
    return {
      defaultOptions: {
        enabledMaskClose: true, // 开启点击遮罩关闭
        enabledEscClose: true, // 开启esc按键关闭
        enabledMouseZoom: true, // 开启鼠标滚轮缩放
        activeColor: 'rgba(239, 84, 78, 0.7)', // 预览图中选中图片的背景颜色
        previewStyle: {
          width: 'auto',
          height: 'auto',
          objectFit: 'cover'
        }, // 预览图样式
        showDownloadBtn: true // 显示下载按钮
      }, // 默认配置
      show: false, // 是否显示预览
      currentImg: '', // 当前预览图片的url
      currentIndex: 0, //当前预览图片的索引
      imgList: [], // 需要预览的图片数组
      imgKey: '', // 图片所在的数据的key
      imgTop: 0, // 图片定位置top
      imgLeft: 0, // 图片定位置left
      startPageX: 0, // 按下鼠标时当前鼠标所在位置x
      startPageY: 0, // 按下鼠标时当前鼠标所在位置y
      imgScale: 1, // 图片缩放
      imgRotate: 0 // 图片旋转
    }
  },
  watch: {
    show: {
      handler(v) {
        if (v) {
          document.body.style.overflow = 'hidden'
          document.addEventListener('mousemove', this.preventDefault, false)
          document.addEventListener('keydown', this.listenerKeydown, false)
        } else {
          document.body.style.overflow = ''
          document.removeEventListener('mousemove', this.preventDefault, false)
          document.removeEventListener('mouseup', this.clearEvent, false)
          document.removeEventListener('keydown', this.listenerKeydown, false)
          this.reset()
        }
      },
      immediate: true
    },
    currentIndex() {
      this.imgTop = 0
      this.imgLeft = 0
      this.imgScale = 1
      this.imgRotate = 0
    }
  },
  methods: {
    // 关闭时重置值
    reset() {
      this.imgList = []
      this.currentImg = ''
      this.currentIndex = 0
      this.imgKey = ''
      this.imgTop = 0
      this.imgLeft = 0
      this.startPageX = 0
      this.startPageY = 0
      this.imgScale = 1
      this.imgRotate = 0
    },
    // 旋转
    handleRotate(type) {
      if (type === 'left') {
        this.imgRotate -= 90
      } else {
        this.imgRotate += 90
      }
    },
    // 切换上一张或者下一张
    handleCut(type) {
      if (this.imgList.length < 2) return
      // const currentIndex = this.imgList.findIndex(item => {
      //   const url = this.imgKey ? item[this.imgKey] : item
      //   return url === this.currentImg
      // })
      let targetIndex = null
      if (type === 'last') {
        if (this.currentIndex === 0) {
          targetIndex = this.imgList.length - 1
        } else {
          targetIndex = this.currentIndex - 1
        }
      }
      if (type === 'next') {
        if (this.currentIndex === this.imgList.length - 1) {
          targetIndex = 0
        } else {
          targetIndex = this.currentIndex + 1
        }
      }
      const targetItem = this.imgList[targetIndex]
      this.currentImg = this.imgKey ? targetItem[this.imgKey] : targetItem
      this.currentIndex = targetIndex
      this.handleXScroll(targetIndex)
    },
    // 使滚动条滚动到当前预览的那一张
    handleXScroll(index) {
      const imgParentElement = document.querySelector('.preview-footer-thumbs')
      const imgWrapElement = document.querySelector('#thumb-item-' + index)
      imgParentElement.scrollTo({
        left: imgWrapElement?.offsetLeft - (imgParentElement.offsetWidth - imgWrapElement.offsetWidth) / 2,
        behavior: 'smooth'
      })
    },
    // 点击缩略图切换当前预览
    handleClickThumb(item, index) {
      const url = this.imgKey ? item[this.imgKey] : item
      this.currentImg = url
      this.currentIndex = index
      this.handleXScroll(index)
    },
    // 点击遮罩
    handleClickMask() {
      if (this.defaultOptions.enabledMaskClose) {
        this.show = false
      }
    },
    // 鼠标滚轮缩放图片
    handerMousewheel(e) {
      if (!this.defaultOptions.enabledMouseZoom) return

      // 火狐浏览器为e.detail 其他浏览器均为e.wheelDelta
      if (e.wheelDelta > 0 || e.detail > 0) {
        this.handleScale('add')
      } else if (e.wheelDelta < 0 || e.detail < 0) {
        this.handleScale('reduce')
      }
    },
    // 缩放 type = add:加 reduce:减
    handleScale(type) {
      if (type === 'add' && this.imgScale < 4) {
        this.imgScale += 0.1
      } else if (type === 'reduce' && this.imgScale > 0.5) {
        this.imgScale -= 0.1
      }
    },
    // 按下鼠标开始移动图片
    handleMoveStart(e) {
      const { pageX, pageY } = e
      this.startPageX = pageX - this.imgLeft
      this.startPageY = pageY - this.imgTop
      document.addEventListener('mousemove', this.handleMore, false)
      document.addEventListener('mouseup', this.clearEvent, false)
      e.preventDefault()
    },
    // 键盘按下
    listenerKeydown(e) {
      if (e.keyCode === 27 && this.defaultOptions.enabledEscClose) {
        this.show = false
      }
    },
    // 移除事件
    clearEvent() {
      document.removeEventListener('mousemove', this.handleMore, false)
    },
    // 按住鼠标移动时的处理
    handleMore(e) {
      const { pageX, pageY } = e
      this.imgTop = pageY - this.startPageY
      this.imgLeft = pageX - this.startPageX
      e.preventDefault()
    },
    // 阻止默认行为
    preventDefault(e) {
      e.preventDefault()
    },
    downloadFile
  }
}
</script>

<style lang="less" scoped>
.preview-wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.5);
  user-select: none;

  li {
    list-style: none;
  }

  .preview {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    &-content {
      position: relative;
      cursor: move;
      transition: 0.2s transform;
      max-height: 100vh;
    }
    &-footer {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      &-tools {
        display: flex;
        justify-content: center;

        li {
          margin-right: 10px;
        }
      }

      &-thumbs {
        max-width: 700px;
        padding-bottom: 10px;
        overflow-x: auto;
        white-space: nowrap;

        .thumb-item {
          padding: 10px;
          margin-right: 10px;
          display: inline-block;
          background: rgba(102, 102, 102, 0.7);
          border-radius: 5px;
          cursor: pointer;
          img {
            width: 60px;
            height: 60px;
            object-fit: cover;
          }
        }
        &::-webkit-scrollbar {
          height: 10px;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 10px;
          -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
          background: #aaa;
          cursor: pointer;
        }

        &::-webkit-scrollbar-track {
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.8);
        }
      }

      &-indexs {
        margin-top: 10px;
        height: 25px;
        line-height: 25px;
        padding: 0 12px;
        background: rgba(0, 0, 0, 0.3);
        color: #fff;
        text-align: center;
        border-radius: 13px;
        font-size: 14px;
      }
    }
    .close-btn {
      position: absolute;
      top: 30px;
      right: 30px;
    }
    .download-btn {
      position: absolute;
      bottom: 30px;
      right: 30px;
    }
  }
}
.icon-btn {
  padding: 8px;
  border-radius: 50%;
  background: rgba(110, 110, 110, 0.7);

  &:hover {
    filter: brightness(1.3);
  }
  cursor: pointer;
  > img {
    display: block;
    width: 25px;
    height: 25px;
  }
}
</style>
