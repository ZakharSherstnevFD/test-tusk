import Vue from "vue";
import Vuex from 'vuex'

import menu from './Menu'
import users from './user'

Vue.use(Vuex)

export default new Vuex.Store ({
    modules: {
      menu,users
    }
})
