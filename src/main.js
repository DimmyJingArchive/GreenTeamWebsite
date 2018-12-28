import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import VueScrollTo from 'vue-scrollto';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';


Vue.config.productionTip = false;
Vue.use(VueScrollTo);

new Vue({
  render: h => h(App)
}).$mount('#app');
