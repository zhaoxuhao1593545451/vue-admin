import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "login",
    meta:{
      name:'111'
    },
    show:false
  },
  {
    path: "/login",
    name: "login",
    meta:{
      name:'222'
    },
    show:false,
    component: () => import("../views/Login/index.vue"),
  },
  {
    path: "/Layout",
    name: "Layout",
    meta:{
      name:'控制台'
    },
    show:true,
    component: () => import("../views/Layout/index.vue"),
    children:[
      {
        path: "/home",
        name: "home",
        meta:{
          name:'首页'
        },
        component: () => import("../views/Home/index.vue")
      }
    ]
  },
  {
    path: "/infoMange",
    name: "infoMange",
    meta:{
      name:'信息管理'
    },
    show:true,
    component: () => import("../views/Layout/index.vue"),
    children:[
      {
        path: "/infoList",
        name: "infoList",
        meta:{
          name:'信息列表'
        },
        component: () => import("../views/InfoMange/InfoList.vue")
      },
      {
        path: "/infoClassify",
        name: "infoClassify",
        meta:{
          name:'信息分类'
        },
        component: () => import("../views/InfoMange/InfoClassify.vue")
      }
    ]
  },
  {
    path: "/userMange",
    name: "userMange",
    meta:{
      name:'用户管理'
    },
    show:true,
    component: () => import("../views/Layout/index.vue"),
    children:[
      {
        path: "/userList",
        name: "userList",
        meta:{
          name:'用户列表'
        },
        component: () => import("../views/UserMange/UserList.vue")
      }
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
