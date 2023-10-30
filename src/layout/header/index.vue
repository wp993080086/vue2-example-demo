<template>
  <div class="header_box">
    <p>{{ title }}</p>
  </div>
</template>

<script>
  export default {
    name:'HeaderLayout',
    props:{
      title: {
        type: String,
        default: '页眉'
      }
    }
  }
</script>

<style lang='scss' scoped>
.header_box{
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid var(--peng-border);
  padding-left: 20px;
}
</style>