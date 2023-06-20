import { env } from 'node:process'

const PREFIX = 'RSS_'

const parseEnv = () => {
  let arr = []

  for (const key in env) {
    if (key.includes(PREFIX)) {
      arr.push(`${key}=${env[key]}`)
    }
  }

  console.log(arr.join('; '))
}

parseEnv()
