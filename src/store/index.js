import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading : false
  },
  mutations: {
    IS_LOADING : (state , payload) => { 
      state.isLoading = payload 
    },
  },
  actions: {
    setLoading({commit} , payload){
      commit('IS_LOADING' , payload)
    }
  },
  modules: {
  }
})
