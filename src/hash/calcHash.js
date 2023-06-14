import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { createHash } from 'node:crypto'

const FILE_NAME = 'fileToCalculateHashFor.txt'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const resolvedPath = path.join(__dirname, 'files', FILE_NAME)

const calculateHash = async () => {
  const contents = await readFile(resolvedPath, { encoding: 'utf8' })

  const hash = createHash('sha256').update(contents).digest('hex')
  console.log(hash)
}

await calculateHash()
