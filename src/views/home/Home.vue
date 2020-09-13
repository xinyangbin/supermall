<template>
  <div id="home">
    <nav-bar class="home-nav">
      <!-- 替换name为center插槽中的内容 -->
      <div slot="center">
        购物街
      </div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends='recommends'></recommend-view>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childrenComps/HomeSwiper'
  import RecommendView from './childrenComps/RecommendView'

  import {getHomeMultidata} from 'network/home'


  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data() {
      return {
        // result: null
        banners: [],
        recommends: []
      }
    },
    // 创建生命周期函数
    created() {
      // 1.请求多个数据
      getHomeMultidata()
      .then(res => {
        // console.log(res);
        // 此处this.result拿到的是组件对象的内容
        // 将数据存储在result这个变量中
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
      .catch(err => {
        console.log(err);
      })
      
    }
  }
</script>

<style>
  /* 给导航栏设置颜色 */
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }
</style>
