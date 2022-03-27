import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import firebase from 'firebase';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Log In',
    component: Home,
},
{
    path: '/register',
    name: 'Register',
    component: () =>
        import(/* webpackChunkName: "about" */ '../views/About.vue'),
},
{
    path: '/dashboard',
    name: 'Dashboard',
    component: () =>
        import(
            /* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'
        ),
    meta: {
        authRequired: true,
    },
},
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/PageHome.vue') },
      { path: '/comment', component: () => import('src/pages/PageComment.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  { 
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
      if (firebase.auth().currentUser) {
          next();
      } else {
          alert('You must be logged in to see this page');
          next({
              path: '/',
          });
      }
  } else {
      next();
  }
});

export default routes
