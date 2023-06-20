import { readdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const resolvedPath = path.join(__dirname, 'files')

const list = async () => {
  try {
    const files = await readdir(resolvedPath, { withFileTypes: true })

    const result = files
      .reduce((acc, it) => (it.isFile() ? [...acc, it.name] : acc), [])
      .join('\n')

    console.log(result)
  } catch {
    throw new Error('FS operation failed')
  }
}

await list()
