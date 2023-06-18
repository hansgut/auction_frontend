import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    authToken: null
  },
  getters: {
    getAuthToken(state){
      if (state.authToken) {
        return state.authToken;
      } else {
        return null;
      }
      
    }
  },
  mutations: {
    setAuthToken(state, token) {
      state.authToken = token;
    }
  },
  actions: {
    logout({ commit }) {
      commit ('setAuthToken', null)
    }
  },
  modules: {},
  plugins: [createPersistedState()]
});
