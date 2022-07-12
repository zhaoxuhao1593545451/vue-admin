<template>
  <div class='content-wrap'>
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
  .content-wrap{
    position: absolute;
    left: 200px;
    right:0;
    top:75px;
    bottom:0;
    background:pink;
    padding:24px
  }
</style>