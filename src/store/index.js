import { createStore } from "vuex";
import login from './login.js'
import user from './user.js'

export default createStore({
  modules:{
    login,
    user
  }
});
