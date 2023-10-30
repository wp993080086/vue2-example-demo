<template>
  <el-button type="primary" @click="sendMessage">点击2</el-button>
</template>

<script>
import sharedWorkerHook from '@/utils/sharedWorkerHook'

export default {
  name: 'SharedWorkerPage2',
  mounted() {
    sharedWorkerHook.port.start()
    // 接收SharedWorker返回的结果
    sharedWorkerHook.port.onmessage = event => {
      console.log('Page2收到：', event.data)
    }
  },
  methods: {
    /**
     * @description 发送消息
     */
    sendMessage() {
      sharedWorkerHook.port.postMessage({ message: 'multiply', value: 1 })
    }
  }
}
</script>