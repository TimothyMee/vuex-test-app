import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      token: ""
    }
  },
  mutations: {
    updateToken(state, payload) {
      state.user.token = payload;
    }
  },
  actions: {
    loginSuccess(state, payload) {
      state.commit("updateToken", payload);
    }
  },
  getters: {
    user_token(state) {
      return state.user.token;
    }
  }
});
