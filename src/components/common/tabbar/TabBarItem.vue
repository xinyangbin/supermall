<template>
  <div class="tab-bar-item" @click="itemClick">

    <!-- 插槽内容存在会被覆盖的问题，所以最好在插槽外层嵌套一层div -->
    <div  v-if="isActive">
      <!-- 插槽动态设置图标 -->
      <slot name="item-icon-active">图标active</slot>
    </div>
    <div v-else>
      <!-- 插槽动态设置图标 -->
      <slot name="item-icon">图标</slot>
    </div>
    <div :style="activeStyle">
      <!-- 插槽动态设置名称 -->
      <slot name="item-text">名称</slot>
    </div>


    <!-- <img src="../../assets/img/tabbar/home.svg" />
    <div>首页</div> -->
  </div>
</template>

<script>
  export default {
    name:"TabBarItem",
    props:{
      path: String,
      activeColor: {
        type: String,
        default: "skyblue"
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed:{
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods:{
      itemClick() {
        // console.log('itemClick');
        this.$router.replace(this.path);

      }
    }
  }
</script>

<style>
  .tab-bar-item {
    flex: 1;  /*flex布局平分TabBar，设置等分*/
    text-align: center;
    height: 49px;  /*一般规定tabbar是49px*/

    font-size: 14px;
  }

  .tab-bar-item img {
    height: 24px;
    width: 24px;
    margin-top: 2px;
    vertical-align: middle;
  }

 /* .active {
   color: skyblue;
 } */
</style>
