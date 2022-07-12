const login={
  namespaced: true,
  state:{
    name:'赵许淏',
    age:18
  },
  getters:{},
  mutations:{
    nameChange(state,name){
      state.name=name
    }
  },
  actions:{},
}
export default login;