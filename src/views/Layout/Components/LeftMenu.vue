<template>
  <div class='leftMenu-wrap'>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      router
    >
      <template v-for='item in routerOption' :key='item.id'>
        <el-sub-menu v-if='item.show' :index="item.path">
          <template #title>
            <span>{{item.meta.name}}</span>
          </template>
          <el-menu-item v-for='childrenItem in item.children' :key='childrenItem.id' :index='childrenItem.path'>
            {{childrenItem.meta.name}}
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import {useRouter} from 'vue-router'
export default {
  name:'leftMenu',
  setup(props,context){
    const routerOption=reactive(useRouter().options.routes);
    let isCollapse=ref(false);
    const handleOpen=(key, keyPath) =>{
      console.log(key, keyPath);
    };
    const handleClose=(key, keyPath) =>{
      console.log(key, keyPath);
    };
    console.log(routerOption)
    return{
      routerOption,
      isCollapse,
      handleOpen,
      handleClose
    }
  }
}
</script>

<style lang='scss' scoped>
  .leftMenu-wrap{
    width: 200px;
    height: 100vh;
    background:orange;
  }
</style>