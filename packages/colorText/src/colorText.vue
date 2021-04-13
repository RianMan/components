<template>
  <div>
    <div class="box" :style="{color: color}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "colorText", //组件全局注册时需要name，
  props:{
      color:{
        default:'#333',
        type: String
      }
  }
};
</script>

<style lang="scss" scoped>
.box {
  font-size: 14px;
}
</style>
