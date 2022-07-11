<template>
  <div>
    <LeftMenu />
    <HeaderNav />
    <Content />
  </div>
</template>

<script>
import LeftMenu from './Components/LeftMenu'
import HeaderNav from './Components/HeaderNav'
import Content from './Components/Content'
export default {
  components:{LeftMenu,HeaderNav,Content}
}
</script>

<style lang='scss' scoped>

</style>