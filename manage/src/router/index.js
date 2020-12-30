import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to, from, next) => {
//   const token = window.sessionStorage.getItem('token');
//   // if (to.path ==='/login'|| to.path ==='/register' ||to.path ==='/forget'){
//   //   return next();
//   // }
//   if (!token){
//     return next('/login');
//   }else {
//     next();
//   }
// })

export default router
