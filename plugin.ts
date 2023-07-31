import type { PluginContext } from '@rcv-prod-toolkit/types'
import { readFileSync } from 'fs'
import { writeFile } from 'fs/promises'
import { join } from 'path'

module.exports = (ctx: PluginContext) => {
  // Emit event that we're ready to operate
  ctx.LPTE.emit({
    meta: {
      type: 'plugin-status-change',
      namespace: 'lpt',
      version: 1
    },
    status: 'RUNNING'
  })
}
