import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import animals from "./animals-data.js";
import products from "./products-data.js";


Vue.config.productionTip = false;

let data = {
  animals: animals,
  products: products,
  favorites: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");