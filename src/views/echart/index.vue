<template>
  <div class="echart_page">
    <div class="header_box">
      <el-button type="primary" @click="handleCreateEchart">创建</el-button>
      <el-button type="primary" @click="handleDestroyEchart">销毁</el-button>
    </div>
    <div class="echart_box"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { echartData1 } from './echart-data'

export default {
  name: 'EchartPage',
  props: [],
  components: {},
  data() {
    return {
      echartObject: null
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    /**
     * @description 创建图例
     */
     handleCreateEchart() {
      if (this.echartObject) {
        this.handleDestroyEchart()
      }
      const dom = document.getElementsByClassName('echart_box')[0]
      this.echartObject = echarts.init(dom)
      this.echartObject.setOption(echartData1)
     },
    /**
     * @description 销毁图例
     */
    handleDestroyEchart() {
      if (this.echartObject) {
        this.echartObject.dispose()
      } else {
        new Error('echartObject is null')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.echart_page{
  width: 100%;
  height: auto;
  .header_box{
    width: 100%;
    height: auto;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--peng-border);
  }
  .echart_box{
    width: 600px;
    height: 400px;
  }
}
</style>
