const sharedWorkerHook = new SharedWorker(new URL('./sharedWorker.js', import.meta.url))

export default sharedWorkerHook
