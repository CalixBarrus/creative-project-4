import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Animals from "../views/Animals.vue";
import Products from "../views/Products.vue";
import Admin from "../views/Admin.vue";
// import animals from "../animals-data.js";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/animals",
    name: "Animals",
    component: Animals,
  },

  {
    path: "/store",
    name: "Products",
    component: Products,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
