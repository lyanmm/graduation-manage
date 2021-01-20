import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from "./routes";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token');
  if (to.path === '/login') {
    sessionStorage.removeItem('token');
    return next();
  }
  if (!token) {
    return next('/login');
  } else {
    next();
  }
})

export default router
