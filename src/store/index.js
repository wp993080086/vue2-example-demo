import Vue from 'vue'
import Vuex from 'vuex'
import mentEnum from './menu-data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'vue2-skill-demo',
    menuList: [...mentEnum]
  },
  mutations: {},
  actions: {},
  getters: {}
})
