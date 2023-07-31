import type { PluginContext, GlobalState } from '@rcv-prod-toolkit/types'
import { readFileSync } from 'fs'
import { writeFile } from 'fs/promises'
import { join } from 'path'



module.exports = (ctx: PluginContext) => {
  const namespace = ctx.plugin.module.getName()
  ctx.LPTE.on(namespace, 'get-full', e => {
    e.reply()
  })

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
