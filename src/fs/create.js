import { appendFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const FILE_NAME = 'fresh.txt'
const FILE_TEXT = 'I am fresh and young'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const resolvedPath = path.join(__dirname, 'files', FILE_NAME)

const create = async () => {
  try {
    await appendFile(resolvedPath, FILE_TEXT, { flag: 'ax' })
  } catch {
    throw new Error('FS operation failed')
  }
}

await create()
