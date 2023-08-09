import Vue from 'vue'
import App from './App.vue'
import vPreviewImage from '../src/index'

Vue.use(vPreviewImage, {
  enabledMaskClose: false
})

new Vue({
  render: (h) => h(App)
}).$mount('#app')
