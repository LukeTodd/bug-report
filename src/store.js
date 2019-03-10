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
    activeBug: {},
    notes: []
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
    },
    addNote(state, data) {
      state.notes.push(data)
    },
    setNotes(state, data) {
      state.notes = data
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
    deleteBug({ commit, state }, payload) {
      let id = state.activeBug._id
      _bugApi.delete(id)
        .then(res => {
          commit('setBugs', res.data.results)
        })
    },
    editBug({ state, dispatch }, payload) {
      let id = state.activeBug._id
      _bugApi.put('' + id, payload)
        .then(res => {
          dispatch('getActiveBug', id)
        })
    },
    createNote({ commit, state }, payload) {
      let id = state.activeBug._id
      _bugApi.post(id + '/notes', payload)
        .then(res => {
          commit('addNote', res.data.results)
        })
    },
    //Don't know why this works but I hope it doesn't break
    getNotes({ commit, state }, payload) {
      let id = payload
      _bugApi.get(id + '/notes')
        .then(res => {
          commit('setNotes', res.data.results)
        })
    },
    deleteNote({ dispatch, state }, payload) {
      let id = state.activeBug._id
      _bugApi.delete(id + '/notes/' + payload)
        .then(res => {
          dispatch('getNotes', id)
        })
    }
  }
})
