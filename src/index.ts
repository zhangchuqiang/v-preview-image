import { createVNode, render, ComponentInternalInstance, App } from 'vue'
import PreviewContent from './index.vue'
import { DefaultOptions, PreviewState } from './types.ts'

let state: PreviewState | null = null // 预览组件内部的状态数据
let defaultOptions: Partial<DefaultOptions> = {} // 默认配置

/**
 * 通过use调用时挂载到vue实例
 * @param {Object} App
 * @param {Object} options
 */
export default function install(App: App, options = {}) {
  if (isObj(options)) {
    defaultOptions = options
  }
  initialize()
  App.config.globalProperties.$preview = preview
}

/**
 * 初始化
 * @param options 配置
 */
function initialize() {
  const vnode = createVNode(PreviewContent)
  const box = document.createElement('div')
  render(vnode, box)
  document.body.appendChild(box)
  const vm = vnode.component as ComponentInternalInstance
  state = vm.exposed?.state as PreviewState
  state.defaultOptions = { ...state.defaultOptions, ...defaultOptions }
}
/**
 * @param {String|Number} current 当前预览的图片索引或者url
 * @param {Array} list 需要预览的图片数组 非必传 如果不传的话 current必须为url 不能为索引
 * @param {String} key 如果list里面的item是图片的url 则不需要，如果是对象的话，需传图片的在对象中的key。
 */
export function preview(current: string | number = '', list: any[] = [], key = '') {
  if (state === null) {
    initialize()
  }
  if (state === null) return
  if (current === '' || current === null || current === undefined) {
    throw 'Vue3PreviewImage：请传入参数'
  } else if (typeof current === 'number') {
    if (!list || !list.length) {
      throw 'Vue3PreviewImage：参数错误，第一个参数为索引时，请在第二个参数中传入数组'
    }
    state.currentImg = key ? list[current][key] : list[current]
    state.currentIndex = current
  } else {
    state.currentImg = current
    if (!list.length) {
      state.imgList = [current]
    }
  }
  state.imgList = list
  state.imgKey = key
  state.show = true
}

preview.close = ()=>{
  closePreview()
}

/**
 * 关闭预览
 */
export function closePreview() {
  if (state !== null && state.show) {
    state.show = false
  }
}

/**
 * 设置预览默认配置
 */
export function setPreviewDefaultOptions(options: Partial<DefaultOptions>) {
  if (isObj(options)) {
    if (state !== null) {
      state.defaultOptions = { ...state.defaultOptions, ...options }
    } else {
      defaultOptions = options
    }
  }
}

/**
 * 是否是对象
 */
function isObj(obj: any) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
