import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Snow from "../components/snow/index.vue"
import axios from 'axios';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Snow",
    component: Snow
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import("../views/Home.vue"),
    meta: { requiresAuth: false }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization');
  console.log(axios.defaults.headers);
  // 判断路由是否需要进行身份验证
  if (to.meta.requiresAuth) {
    // 发起 /protected 接口请求，验证用户是否已经登录并且有访问该路由的权限
    axios.get('/api/protected')
      .then(response => {
        // 请求成功，说明用户已经登录并且有访问该路由的权限，继续执行路由跳转
        console.log('输出结果', response);
        next();
      })
      .catch(error => {
        // 请求失败，说明用户没有权限访问该路由，跳转到登录页面或其他错误页面
        router.push('/');
        console.log('路由请求失败');
      });
  } else {
    // 路由不需要进行身份验证，直接执行路由跳转
    next();
    console.log('没验证');
  }
});

export default router;
