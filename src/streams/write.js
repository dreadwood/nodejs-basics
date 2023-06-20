import { createWriteStream } from 'node:fs'
import { stdin } from 'node:process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const FILE_NAME = 'fileToWrite.txt'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const resolvedPath = path.join(__dirname, 'files', FILE_NAME)

const write = async () => {
  const stream = await createWriteStream(resolvedPath, { flags: 'a' })
  stdin.pipe(stream)

  console.log('Press command-D, control-D, ^-D, Ctrl-D to exit\n')
}

await write()
