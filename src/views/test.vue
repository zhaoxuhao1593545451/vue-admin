<template>
  <div>
    <p>我是测试组件</p>
    {{num}}
    我是父组件传来的{{val}}
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  props:{
    val:{
      type:Number
    }
  },
  setup(){
    const num=ref(0)
    let addNum=()=>{
      return num.value
    }
    return{
      num,
      addNum
    }
  }
}
</script>

<style>

</style>