import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const WRONG_FILE_NAME = 'wrongFilename.txt'
const CORRECT_FILE_NAME = 'properFilename.md'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rename = async () => {
  try {
    const files = await fs.readdir(path.join(__dirname, 'files'))

    if (!files.includes(WRONG_FILE_NAME) || files.includes(CORRECT_FILE_NAME)) {
      throw Error
    }

    fs.rename(
      path.join(__dirname, 'files', WRONG_FILE_NAME),
      path.join(__dirname, 'files', CORRECT_FILE_NAME)
    )
  } catch (err) {
    throw new Error('FS operation failed')
  }
}

await rename()
