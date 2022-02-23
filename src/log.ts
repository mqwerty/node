import * as env from 'env-var'
import Bunyan, { LogLevel } from 'bunyan'
import { serializeError } from 'serialize-error'

function stream() {
  return {
    write: entry => {
      const logObject = JSON.parse(entry)
      logObject.levelNum = logObject.level
      logObject.level = Bunyan.nameFromLevel[logObject.level]
      delete logObject.v
      delete logObject.name
      delete logObject.pid
      delete logObject.hostname
      if (logObject.msg === '') {
        delete logObject.msg
      }
      process.stdout.write(JSON.stringify(logObject) + '\n')
    },
  }
}

const log = Bunyan.createLogger({
  name: process.env.npm_package_name || 'app',
  level: env.get('APP_LOG_LEVEL').default('info').asString() as LogLevel,
  streams: env.get('APP_LOG_DEV').default('false').asBool() ? undefined : [{ stream: stream() }],
  serializers: {
    err: serializeError,
    error: serializeError,
  },
})

export default log
