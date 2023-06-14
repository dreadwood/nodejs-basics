import { stdout, stdin } from 'node:process'
import { Transform } from 'node:stream'

const reverseTransform = new Transform({
  transform(chunk, _, callback) {
    const chunkStr = chunk.toString().trim()
    const reversedChunk = chunkStr.split('').reverse().join('')

    callback(null, reversedChunk + '\n')
  },
})

const transform = async () => {
  stdin.pipe(reverseTransform).pipe(stdout)

  console.log('Press command-D, control-D, ^-D, Ctrl-D to exit\n')
}

await transform()
