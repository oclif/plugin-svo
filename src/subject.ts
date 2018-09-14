import {Table} from 'cli-ux'

export interface Subject<T extends object> {
  props: Table.Table.Columns<T>
  fetchAll(): Promise<T[]>
  fetchOne(id: string): Promise<T>
}
