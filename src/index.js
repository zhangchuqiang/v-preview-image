import PreviewContent from './index.vue'

let instance = null // 组件实例

/**
 * 通过use调用时挂载到vue实例
 * @param {Object} App
 * @param {Object} options
 */
export default function install(Vue, options = {}) {
  const layerConstructor = Vue.extend(PreviewContent)
  instance = new layerConstructor({
    el: document.createElement('div')
  })
  document.body.appendChild(instance.$el)

  setPreviewDefaultOptions(options)
  
  Vue.prototype.$preview = preview
}
/**
 * @param {String|Number} current 当前预览的图片索引或者url
 * @param {Array} list 需要预览的图片数组 非必传 如果不传的话 current必须为url 不能为索引
 * @param {String} key 如果list里面的item是图片的url 则不需要，如果是对象的话，需传图片的在对象中的key。
 */
export function preview(current = '', list = [], key = '') {
  if (current === '' || current === null || current === undefined) {
    throw 'Vue3PreviewImage：请传入参数'
  } else if (typeof current === 'number') {
    if (!list || !list.length) {
      throw 'Vue3PreviewImage：参数错误，第一个参数为索引时，请在第二个参数中传入数组'
    }
    instance.currentImg = key ? list[current][key] : list[current]
    instance.currentIndex = current
  } else {
    instance.currentImg = current
    if (!list.length) {
      instance.imgList = [current]
    }
  }
  instance.imgList = list
  instance.imgKey = key
  instance.show = true
}

/**
 * 关闭预览
 */
preview.close = () => {
  if (instance !== null && instance.show) {
    instance.show = false
  }
}

/**
 * 设置预览默认配置
 */
export function setPreviewDefaultOptions(options) {
  if (isObj(options) && instance !== null) {
    instance.defaultOptions = { ...instance.defaultOptions, ...options }
  }
}

/**
 * 是否是对象
 */
function isObj(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
