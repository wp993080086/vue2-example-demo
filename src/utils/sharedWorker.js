/**
 * @description 所有连接这个worker的集合
 */
const portsList = []

/**
 * @description 连接成功回调
 */
self.onconnect = event => {
  // 当前触发连接的端口
  const port = event.ports[0]
  // 添加进去
  portsList.push(port)
  // 接收到消息的回调
  port.onmessage = event => {
    // 获取传递的消息
    const { message, value } = event.data
    // 计算
    let result = 0
    switch (message) {
      case 'add':
        result = value * 2
        break
      case 'multiply':
        result = value * value
        break
      default:
        result = value
    }
    // 给所有连接的目标发送消息
    portsList.forEach(port => port.postMessage(`${message}结果是：${result}`))
  }
}
