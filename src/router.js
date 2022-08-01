/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'

Vue.use(Router)

const router = new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    scrollBehavior: function(to) {
        if (to.hash) {
            return {selector: to.hash, behavior:'smooth'}
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        // {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            // path: '',
            // component: () => import('./layouts/MainLayout.vue'),
            // children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================

                {
                    path: '/',
                    name: 'dashboard-view',
                    component: DashboardView,
                },

                {
                    path: '/apps',
                    name: 'AppsGames',
                    component: () => import('./views/AppsGames.vue'),
                },
                {
                    path: '/login-edit',
                    name: 'LoginEdit',
                    component: () => import('./views/LoginEdit.vue'),
                },
                {
                    path: '/files',
                    name: 'Files',
                    component: () => import('./views/FilesView.vue'),
                },
                {
                    path: '/404',
                    name: 'ErrorPage',
                    component: () => import('./views/page-404.vue'),
                },

                // =============================================================================
                // Application Routes
                // =============================================================================

            // ],
        // },
        // {
        //     path: '*',
        //     redirect: '/views/page-404'
        // }
    ],
})

export default router


// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

// const router = new VueRouter({
//   routes
// })

// export default router

