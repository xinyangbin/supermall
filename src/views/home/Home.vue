<template>
  <div id="home">
    <nav-bar class="home-nav">
      <!-- 替换name为center插槽中的内容 -->
      <div slot="center">
        购物街
      </div>
    </nav-bar>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  // import Swiper from 'components/common/swiper/Swiper'
  // import SwiperItem from 'components/common/swiper/SwiperItem'
  import {getHomeMultidata} from 'network/home'
  import {Swiper, SwiperItem} from 'components/common/swiper'


  export default {
    name:"Home",
    components: {
      NavBar,
      Swiper,
      SwiperItem
    },
    data() {
      return {
        // result: null
        banners: [],
        recommands: []
      }
    },
    // 创建生命周期函数
    created() {
      // 1.请求多个数据
      getHomeMultidata()
      .then(res => {
        console.log(res);
        // 此处this.result拿到的是组件对象的内容
        // 将数据存储在result这个变量中
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommands = res.data.recommand;
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
