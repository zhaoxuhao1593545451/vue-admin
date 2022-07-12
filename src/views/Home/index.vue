<template>
  <div>
    首页
    <p>{{store.state.num}}</p>
    <!-- <el-button type='primary' @click='handleNum()'>点击</el-button> -->
  </div>
</template>

<script>
import {useStore} from 'vuex'
export default {
  setup(){
    const store=useStore();
    return {
      store,
      // handleNum
    }
  }
}
</script>

<style>

</style>