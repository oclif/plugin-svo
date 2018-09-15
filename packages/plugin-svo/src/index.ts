import {Command} from '@oclif/command'
import {Table, ux} from 'cli-ux'

export type View<T extends object> = Table.Table.Columns<T>

export interface Subject extends SubjectOptions {
  run(id: string, argv: string[]): Promise<any>
}

export interface SubjectOptions {
  verbs: {[k: string]: typeof Command}
  run?(id: string, argv: string[]): Promise<any>
}

export function subject(options: SubjectOptions): Subject {
  return {
    async run(_: string, argv: string[]) {
      const verb = this.verbs[argv[0] || 'list']
      await verb!.run()
    },
    ...options,
  }
}

export function list<T extends object>(options: {view: View<T>, fetch(): Promise<T[]>}): typeof Command {
  return class extends Command {
    async run() {
      const data = await options.fetch()
      ux.table(data, options.view)
    }
  }
}
