<template>
  <div>
    <LeftMenu />
    <HeaderNav />
    <Content />
  </div>
</template>

<script>
import LeftMenu from './components/leftMenu'
import HeaderNav from './components/headerNav'
import Content from './components/content'
export default {
  components:{LeftMenu,HeaderNav,Content}
}
</script>

<style lang='scss' scoped>

</style>