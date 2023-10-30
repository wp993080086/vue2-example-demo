<template>
  <div id="app">
    <div class="app_left">
      <menus />
    </div>
    <div class="app_right">
      <headers />
      <div class="app_main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import headers from '@/layout/header'
import menus from '@/layout/menu'

export default {
  name: 'App',
  components: {
    headers,
    menus
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  width: 100%;
  height: 100%;
  .app_left {
    width: 200px;
    border-right: 1px solid var(--peng-border);
  }
  .app_right {
    width: calc(100% - 200px);
    height: 100%;
    .app_main {
      width: 100%;
      height: auto;
    }
  }
}
</style>
