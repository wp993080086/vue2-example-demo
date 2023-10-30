export default [
  {
    path: '/',
    name: '/',
    redirect: '/home',
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: 'home' */ '@/views/home'),
    meta: {
      title: '首页',
      keepAlive: false
    }
  },
  {
    path: '/sharedWorkerPage1',
    name: 'SharedWorkerPage1',
    component: () => import(/* webpackChunkName: 'sharedWorkerPage1' */ '@/views/sharedWorker/page1.vue'),
    meta: {
      title: 'SharedWorkerPage1',
      keepAlive: false
    }
  },
  {
    path: '/sharedWorkerPage2',
    name: 'SharedWorkerPage2',
    component: () => import(/* webpackChunkName: 'sharedWorkerPage2' */ '@/views/sharedWorker/page2.vue'),
    meta: {
      title: 'SharedWorkerPage2',
      keepAlive: false
    }
  }
]
