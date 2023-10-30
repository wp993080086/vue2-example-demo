import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import routerList from './router'

Vue.use(VueRouter)

const routes = [...routerList]

const router = new VueRouter({
  mode: 'hash',
  routes
})

/**
 * @description 前置守卫
 */
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

/**
 * @description 后置守卫
 */
router.afterEach(() => {
  NProgress.done()
})

export default router
