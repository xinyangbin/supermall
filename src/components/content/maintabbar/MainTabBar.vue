<template>
  <tab-bar>
    <!-- <router-view></router-view> -->
    <!-- <tab-bar-item></tab-bar-item> -->
    <!-- <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/home.svg" />
      首页
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/home.svg" />
      分类
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/home.svg" />
      购物车
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/home.svg" />
      我的
    </div> -->
    <!-- 使用tab-bar-item具名插槽，动态设置其中的内容 -->
    <tab-bar-item path="/home">
      <img slot="item-icon" src="../assets/img/tabbar/home.svg"/>
      <img slot="item-icon-active" src="../assets/img/tabbar/home_active.svg" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg"/>
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shop">
      <img slot="item-icon" src="~assets/img/tabbar/shop.svg"/>
      <img slot="item-icon-active" src="~assets/img/tabbar/shop_active.svg" />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg"/>
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar"
  import TabBarItem from "components/common/tabbar/TabBarItem"

  export default {
    name:"MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
