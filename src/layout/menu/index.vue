<template>
  <el-menu default-active="/" router>
    <template v-for="item in menuList">
      <template v-if="item.children && item.children.length > 0">
        <el-submenu :key="item.path" :index="item.path">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.name}}</span>
          </template>
          <template v-for="children in item.children">
            <el-menu-item :key="children.path" :index="children.path">{{ children.name }}</el-menu-item>
          </template>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :key="item.path" :index="item.path">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: 'MenuLayout',
  computed: {
    menuList() {
      return this.$store.state.menuList || []
    }
  }
}
</script>
