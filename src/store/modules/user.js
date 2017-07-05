import Vue from 'vue'
import Api from '../api'
let api = new Api('user')

// initial state
const state = {
  user: {}
}

// getters
const getters = {}

// actions
const actions = {
  getUser ({ commit, state }) {
    return Object.keys(state.user).length > 0
    ? Promise.resolve(state.user)
    : api.invoke('get').then(user => {
      commit({
        type: 'setUser',
        user
      })
    })
  }
}

// mutations
const mutations = {
  setUser (state, { user }) {
    Vue.set(state, 'user', user)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
