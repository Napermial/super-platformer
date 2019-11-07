import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/index'


Vue.config.productionTip = false;




new Vue({
    render: h => h(App),
  router, axios
}).$mount('#app')
