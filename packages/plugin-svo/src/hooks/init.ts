import {Hook} from '@oclif/config'
import * as path from 'path'

import {Subject} from '..'

const hook: Hook<'init'> = async function (opts) {
  const {id, argv} = opts
  if (id && id.startsWith('@')) {
    try {
      const subjectRoot = path.join(this.config.root, 'src/subjects')
      const subjectName = id.split('@')[1].split(':')[0]
      const subject: Subject<any> = require(path.join(subjectRoot, subjectName)).default
      await subject.run(id, argv)
    } catch (err) {
      this.error(err)
    }
    this.exit(0)
  }
}

export default hook
