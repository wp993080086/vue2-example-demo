import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'vue2-skill-demo',
    menuList: [
      {
        name: '首页',
        path: '/',
        icon: 'home',
        children: []
      },
      {
        name: 'SharedWorkerPage1',
        path: '/sharedWorkerPage1',
        icon: 'home'
      },
      {
        name: 'SharedWorkerPage2',
        path: '/sharedWorkerPage2',
        icon: 'home'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {}
})
