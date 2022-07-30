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

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: function(to) {
        if (to.hash) {
            return {selector: to.hash, behavior:'smooth'}
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () => import('./layouts/MainLayout.vue'),
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================

                {
                    path: '/',
                    name: 'dashboard-view',
                    component: () => import('./views/DashboardView.vue'),
                    meta: {
                        rule: 'editor',
                    }
                },

                {
                    path: '/apps',
                    name: 'AppsGames',
                    component: () => import('./views/AppsGames.vue'),
                    meta: {
                        rule: 'editor',
                    }
                },
                {
                    path: '/login-edit',
                    name: 'LoginEdit',
                    component: () => import('./views/LoginEdit.vue'),
                    meta: {
                        rule: 'editor',
                    }
                },
                {
                    path: '/files',
                    name: 'Files',
                    component: () => import('./views/FilesView.vue'),
                    meta: {
                        rule: 'editor',
                    }
                },
                {
                    path: '/404',
                    name: 'ErrorPage',
                    component: () => import('./views/page-404.vue'),
                    meta: {
                        rule: 'editor',
                    }
                },

                // =============================================================================
                // Application Routes
                // =============================================================================

            ],
        },
        {
            path: '*',
            redirect: '/views/page-404'
        }
    ],
})

// router.afterEach(() => {
//     // Remove initial loading
//     const appLoading = document.getElementById('loading-bg')
//     if (appLoading) {
//         appLoading.style.display = "none";
//     }
// })


export default router
