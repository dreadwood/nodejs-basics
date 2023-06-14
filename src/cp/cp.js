import { fork } from 'node:child_process'
import { stdin, stdout } from 'node:process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const FILE_NAME = 'script.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const resolvedPath = path.join(__dirname, 'files', FILE_NAME)

const spawnChildProcess = async args => {
  const childProcess = fork(resolvedPath, args, { silent: true })

  stdin.pipe(childProcess.stdin)
  childProcess.stdout.pipe(stdout)
}

spawnChildProcess(['someArgument1', 'someArgument2'])
