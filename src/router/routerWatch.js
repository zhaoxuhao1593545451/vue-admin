import router from './index';
const token='111'
router.beforeEach((to,from,next)=>{
  if(to.path=='/home'){
    token?next():next('/login')
  }else{
    next()
  }
})