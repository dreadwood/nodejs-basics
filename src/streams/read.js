import { createReadStream } from 'node:fs'
import { stdout } from 'node:process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const FILE_NAME = 'fileToRead.txt'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const resolvedPath = path.join(__dirname, 'files', FILE_NAME)

const read = async () => {
  const stream = await createReadStream(resolvedPath)
  await stream.pipe(stdout)
}

await read()
