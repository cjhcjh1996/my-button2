// examples/main.js
import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import cjh from '../src'
// 注册组件库
Vue.use(cjh)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
