import { createReadStream, createWriteStream } from 'node:fs'
import zlib from 'node:zlib'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const INPUT_FILE_NAME = 'archive.gz'
const OUTPUT_FILE_NAME = 'fileToCompress.txt'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const inputPath = path.join(__dirname, 'files', INPUT_FILE_NAME)
const outputPath = path.join(__dirname, OUTPUT_FILE_NAME)

const unzip = zlib.createUnzip()

const decompress = async () => {
  const stream = await createReadStream(inputPath)
  const stream2 = await createWriteStream(outputPath)

  stream.pipe(unzip).pipe(stream2)
}

await decompress()
