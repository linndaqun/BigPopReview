
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/PageHome.vue') },
      { path: '/comment', component: () => import('src/pages/PageComment.vue') },
      { path: '/camera', component: () => import('src/pages/PageCamera.vue') },
      { path: '/login', component: () => import('src/pages/PageLog.vue') },
      { path: '/register', component: () => import('src/pages/PageRegister.vue') },
    ]
  },
  

  // Always leave this as last one,
  // but you can also remove it
  { 
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
