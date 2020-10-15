import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Login from './Login'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./plugins/axios";


Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
  router,
  store,
  render: function (h) { return h(this.$store.state.admin.adminName ? App : Login) }
}).$mount('#app')
