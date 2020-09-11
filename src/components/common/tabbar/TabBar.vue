<template>
  <div id="app">
    <div id="tab-bar">
      <!-- 设置一个插槽，其中将tabbaritem中的内容渲染在这个插槽中 -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:"TabBar"
  }
</script>

<style>
  #tab-bar {
    display: flex;
    background-color: #f2f2f2;

    position: fixed;
    /* 设置left和right保证占满屏幕 */
    left: 0;
    right: 0;
    /* 设置bottom将内容定位到页面最下面 */
    bottom: 0;

    /* 设置阴影过度 */
    box-shadow:0px -5px 1px rgba(100, 100, 100, 0.2);
  }
</style>
