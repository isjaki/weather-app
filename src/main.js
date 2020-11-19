import Vue from 'vue';
import App from '@/App.vue';
import router from '@/infrastructure/router';
import store from '@/infrastructure/store';
import registerIcons from '@/infrastructure/registration/registerIcons';

Vue.config.productionTip = false;

registerIcons();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
