import {Command} from '@oclif/command'
import {Table, ux} from 'cli-ux'

export abstract class Verb extends Command {
  static verb: string
}

export interface SubjectOptions<T extends object> {
  view: Table.Table.Columns<T>
  verbs: ('list' | typeof Verb)[]
  fetchAll(): Promise<T[]>
  fetchOne(id: string): Promise<T>
}

export interface Subject<T extends object> {
  view: Table.Table.Columns<T>
  verbs: Array<typeof Verb>
  fetchAll(): Promise<T[]>
  fetchOne(id: string): Promise<T>
  run(id: string, argv: string[]): Promise<any>
}

export function subject<T extends object>(options: SubjectOptions<T>): Subject<T> {
  return {
    ...options,
    async run(_: string, argv: string[]) {
      const verb = this.verbs.find(c => c.verb === (argv[0] || 'list'))
      await verb!.run()
    },
    verbs: options.verbs.map(v => {
      if (typeof v !== 'string') return v
      switch (v) {
      case 'list':
        return class extends Verb {
          static verb = v as string
          async run() {
            const data = await options.fetchAll()
            ux.table(data, options.view)
          }
        }
      default:
        throw new Error(`unknown verb: ${v}`)
      }
    })
  }
}