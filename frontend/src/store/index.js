import { createStore } from 'vuex'
import SignUpModule from '@/store/signUp/SignUpModule'
import LogInModule from '@/store/logIn/LogInModule'
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    SignUpModule:SignUpModule,
    LogInModule:LogInModule
  }
})
