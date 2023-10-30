<template>
  <el-button type="primary" @click="sendMessage">点击1</el-button>
</template>

<script>
import sharedWorkerHook from '@/utils/sharedWorkerHook'

export default {
  name: 'SharedWorkerPage1',
  mounted() {
    sharedWorkerHook.port.start()
    // 接收SharedWorker返回的结果
    sharedWorkerHook.port.onmessage = event => {
      console.log('Page1收到：', event.data)
    }
  },
  methods: {
    /**
     * @description 发送消息
     */
    sendMessage() {
      sharedWorkerHook.port.postMessage({ message: 'add', value: 1 })
    }
  }
}
</script>