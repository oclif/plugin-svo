import {Hook} from '@oclif/config'
import * as path from 'path'

import {Subject} from '..'

const hook: Hook<'init'> = async function (opts) {
  const id = opts.id
  if (id && id.startsWith('@')) {
    try {
      const subjectRoot = path.join(this.config.root, 'src/subjects')
      const subjectName = id.split('@')[1]
      const subject: Subject<any> = require(path.join(subjectRoot, subjectName)).default
      const verb = subject.verbs.find(c => c.verb === (opts.argv[0] || 'list'))
      await verb!.run()
      this.exit(0)
    } catch (err) {
      this.error(err)
    }
  }
}

export default hook
