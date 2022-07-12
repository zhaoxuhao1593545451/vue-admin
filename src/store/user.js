const login={
  namespaced: true,
  state:{
    name:'胡爽',
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