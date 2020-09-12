<template>
  <div id="home">
    <nav-bar class="home-nav">
      <!-- 替换name为center插槽中的内容 -->
      <div slot="center">
        购物街
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getHomeMultidata} from 'network/home'

  export default {
    name:"Home",
    components: {
      NavBar
    },
    // 创建生命周期函数
    created() {
      // 1.请求多个数据
      getHomeMultidata()
      .then(res => {
        console.log(res);
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
