import { Worker } from 'node:worker_threads'
import os from 'node:os'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const FILE_NAME = 'worker.js'
const INITIAL_WORKER_DATA = 10

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const resolvedPath = path.join(__dirname, FILE_NAME)

const createWorker = workerData => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(resolvedPath, { workerData })

    worker.on('message', data =>
      resolve({
        status: 'resolved',
        data,
      })
    )

    worker.on('error', () =>
      reject({
        status: 'error',
        data: null,
      })
    )
  })
}
const performCalculations = async () => {
  const cpus = os.cpus()

  const workers = cpus.map((_, i) => {
    return createWorker(INITIAL_WORKER_DATA + i)
  })

  const resultPromise = await Promise.allSettled(workers)
  const result = resultPromise.map(it => {
    return it.value || it.reason
  })

  console.log(result)
}

await performCalculations()
