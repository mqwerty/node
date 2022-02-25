import 'dotenv/config'
import log from './log'
import main from './main'

// main
;(async () => {
  try {
    const res = await main()
    log.trace({ key: 'index.result', res }, 'success')
  } catch (err) {
    log.fatal({ key: 'index.fatal', err })
    // eslint-disable-next-line no-process-exit
    process.exit(1)
  }
})()
