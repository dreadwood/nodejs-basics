import { createReadStream, createWriteStream } from 'node:fs'
import zlib from 'node:zlib'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const INPUT_FILE_NAME = 'fileToCompress.txt'
const OUTPUT_FILE_NAME = 'archive.gz'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const inputPath = path.join(__dirname, 'files', INPUT_FILE_NAME)
const outputPath = path.join(__dirname, 'files', OUTPUT_FILE_NAME)

const gzip = zlib.createGzip()

const compress = async () => {
  const stream = await createReadStream(inputPath)
  const stream2 = await createWriteStream(outputPath)

  stream.pipe(gzip).pipe(stream2)
}

await compress()
