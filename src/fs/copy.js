import { copyFile, readdir, mkdir, constants } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const INPUT_DIR = 'files'
const OUTPUT_DIR = 'files_copy'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const inputDir = path.join(__dirname, INPUT_DIR)
const outputDir = path.join(__dirname, OUTPUT_DIR)

const copy = async () => {
  try {
    const elements = await readdir(inputDir, { withFileTypes: true })
    await mkdir(outputDir)

    for (const el of elements) {
      const inputEl = path.join(inputDir, el.name)
      const outputEl = path.join(outputDir, el.name)

      if (el.isDirectory()) {
        copying(inputEl, outputEl)
      } else {
        await copyFile(inputEl, outputEl, constants.COPYFILE_EXCL)
      }
    }
  } catch {
    throw new Error('FS operation failed')
  }
}

await copy()
