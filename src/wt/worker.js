import { workerData, parentPort } from 'node:worker_threads'

// if (Math.random() > 0.5) throw new Error()

const nthFibonacci = n =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2)

const sendResult = () => {
  const resultFibonacci = nthFibonacci(workerData)

  parentPort.postMessage(resultFibonacci)
}

sendResult()
