import Vue from 'vue'
import Vuex from 'vuex'

import HomeModules from './modules/HomeModules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    HomeModules,
  }
})
