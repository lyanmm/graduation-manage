export const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    redirect: '/home/summary',
    children: [
      {
        path: 'summary',
        component: () => import('../components/home/dashboard/Summary.vue'),
      },
      {
        path: 'checkDevice',
        component: () => import('../components/home/device/CheckDevice.vue'),
      },
    ]
  }

]