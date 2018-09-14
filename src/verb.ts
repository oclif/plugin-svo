import {Command} from '@oclif/command'
import {ux} from 'cli-ux'

import {Subject} from './subject'

export function list<T extends object>(subject: Subject<T>): typeof Command {
  return class extends Command {
    async run() {
      const data = await subject.fetchAll()
      ux.table(data, subject.props)
    }
  }
}
