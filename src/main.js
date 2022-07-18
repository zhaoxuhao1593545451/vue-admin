import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入全局样式
import "./assets/styles/base.scss";
// 引入ElementUI
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import locale from 'element-plus/lib/locale/lang/zh-cn' //中文
import "@/router/routerWatch";


createApp(App).use(store).use(router).use(ElementPlus,{locale}).mount("#app");