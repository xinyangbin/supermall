import Vue from 'vue';
import VueRouter from 'vue-router';

// 懒加载
const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')
const Shop = () => import('../views/shop/Shop')

// 1.安装插件
Vue.use(VueRouter);

// 2.创建路由对象
const routes = [
  // 设置路由映射关系

  // 重定向
  {
    path:"",
    redirect: '/home'
  },
  {
    path:"/home",
    component: Home
  },
  {
    path:"/category",
    component: Category
  },
  {
    path:"/shop",
    component: Shop
  },
  {
    path:"/profile",
    component: Profile
  }
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

// 3.导出路由，去main里面挂载
export default router;