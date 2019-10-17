import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "./registerServiceWorker";
import { ServerTable, ClientTable, Event } from "vue-tables-2";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(ClientTable);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
