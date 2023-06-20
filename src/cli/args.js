import { argv } from 'node:process'

const ARGV_INDEX = 2

const parseArgs = () => {
  const args = argv.slice(ARGV_INDEX)
  let text = ''

  for (let i = 0; i < args.length; i++) {
    if (i % 2 === 0) {
      text += `${args[i].slice(2)} is `
    } else {
      text += `${args[i]}${i + 1 === args.length ? '' : ', '}`
    }
  }

  console.log(text)
}

parseArgs()
