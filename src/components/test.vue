<template>
  <div>
    <div class='modal' v-if='visible'>
      我是弹框
      <p><el-button type='primary' @click='handleBtn()'>点击</el-button></p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    visible:{
      type:Boolean,
      default:false
    }
  },
  setup(props,context){
    const handleBtn=()=>{
      context.emit('update:visible',false)
    }
    return{
      handleBtn
    }
    
  }
}
</script>

<style lang='scss' scoped>
  .modal{
    width: 100px;
    height: 100px;
    border:1px solid red
  }
</style>