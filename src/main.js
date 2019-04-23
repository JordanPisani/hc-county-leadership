import Vue from 'vue/dist/vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.mixin({
  components: {
    HcCountyLeadership: App
  }
})

new Vue().$mount('#app')
