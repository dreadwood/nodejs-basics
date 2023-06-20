import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const FILE_NAME = 'fileToRead.txt'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const resolvedPath = path.join(__dirname, 'files', FILE_NAME)

const read = async () => {
  try {
    const contents = await readFile(resolvedPath, { encoding: 'utf8' })
    console.log(contents)
  } catch (err) {
    throw new Error('FS operation failed')
  }
}

await read()
