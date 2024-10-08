import { CSSProperties } from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $preview: (current?: string | number, list?: any[], key?: string) => void
  }
}

/**
 * 默认配置
 */
export interface DefaultOptions {
  /**
   * 开启点击遮罩关闭
   * 默认true
   */
  enabledMaskClose: boolean

  /**
   * 开启esc按键关闭
   * 默认true
   */
  enabledEscClose: boolean

  /**
   * 开启鼠标滚轮缩放
   * 默认true
   */
  enabledMouseZoom: boolean

  /**
   * 预览图中选中图片的背景颜色
   * 默认rgba(239, 84, 78, 0.7)
   */
  activeColor: string

  /**
   * 预览图的样式 可设置宽高
   */
  previewStyle: CSSProperties

  /**
   * 显示下载按钮
   */
  showDownloadBtn: boolean
}

/**
 * 组件状态
 */
export interface PreviewState {
  defaultOptions: DefaultOptions // 默认配置
  show: boolean // 是否显示预览
  currentImg: string // 当前预览图片的url
  currentIndex: number //当前预览图片的索引
  imgList: any[] // 需要预览的图片数组
  imgKey: string // 图片所在的数据的key
  imgTop: number // 图片定位置top
  imgLeft: number // 图片定位置left
  startPageX: number // 按下鼠标时当前鼠标所在位置x
  startPageY: number // 按下鼠标时当前鼠标所在位置y
  imgScale: number // 图片缩放
  imgRotate: number // 图片旋转
}
