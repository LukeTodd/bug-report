import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router.js'

Vue.use(Vuex)

let _bugApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/LUKETODD/bugs',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: {}
  },
  mutations: {
    addBug(state, data) {
      state.bugs.push(data)
    },
    setBugs(state, data) {
      state.bugs = data
    },
    setActiveBug(state, data) {
      state.activeBug = data
    }
  },
  actions: {
    createBug({ commit, dispatch }, payload) {
      _bugApi.post('', payload)
        .then(res => {
          console.log(res)
          commit('addBug', res.data.results)
        })
    },
    getBugs({ commit, dispatch }, payload) {
      _bugApi.get('')
        .then(res => {
          commit('setBugs', res.data.results)
        })
    },
    getActiveBug({ commit, dispatch }, payload) {
      _bugApi.get('' + payload)
        .then(res => {
          commit('setActiveBug', res.data.results)
        })
    },
    deleteBug({ commit, dispatch }, payload) {
      debugger
      _bugApi.delete('' + payload)
        .then(res => {
          commit('setBugs', res.data.results)
        })
    }

  }
})
