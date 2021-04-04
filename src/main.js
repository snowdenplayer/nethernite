import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(BootstrapVue)
new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
