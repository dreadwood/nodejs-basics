import { rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const FILE_NAME = 'fileToRemove.txt'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const resolvedPath = path.join(__dirname, 'files', FILE_NAME)

const remove = async () => {
  try {
    await rm(resolvedPath)
  } catch {
    throw new Error('FS operation failed')
  }
}

await remove()
