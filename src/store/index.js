import Vue from 'vue'
import Vuex from 'vuex'
import messages from '../data/messages'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages
  },
  mutations: {
    appendPost: (state, post) => {
      state.messages.push(post)
    }
  },
  actions: {
    addPost: ({ commit }, payload) => {
      commit('appendPost', payload)
    }
  },
  modules: {
  }
})
