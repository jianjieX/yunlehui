// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入elementUI组件 2.10.1
import ElementUI from 'element-ui';

// 引入elementUI样式 2.10.1
import 'element-ui/lib/theme-chalk/index.css';
import '@/utils/http.js';
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
