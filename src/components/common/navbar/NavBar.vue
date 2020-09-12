<template>
  <div class="nar-bar">
    <!-- 把插槽包裹在div里面，避免出现其他问题 -->
    <div class="left">
      <!-- 使用具名插槽，指定替换内容 -->
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
  .nar-bar {
    /*  */
    display: flex;
    /* height: 44px; */
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  }
  /* 标签选择器（div, h1, p） */
  .left, .right {
    width: 60px;
    /* background-color: red; */
  }

  .center{
    /* background-color: aqua; */
    flex: 1;
  }
</style>