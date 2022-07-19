<template>
  <div>
    我是{{name}}
  </div>
</template>

<script>
import {useRouter,useRoute} from 'vue-router'
export default {
  setup(props,context){
    const route=useRoute();
    const name=route.query.name
    return{
      name
    }
  }
}
</script>

<style>

</style>