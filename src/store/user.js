export default {
  state:{
    users: []
  },
  mutations:{
    setUsers(state, payload) {
      state.users = payload
    }
  },
  actions:{
    setUsers({commit}, payload) {
      commit('setUsers', payload)
    }
  },
  getters: {
    getUsers(state) {
      return state.users
    }
  }
}
