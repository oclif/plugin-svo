import {Command} from '@oclif/command'
import axios from 'axios'

export abstract class Subject<T> {
  abstract fetchAll(): Promise<T[]>
  abstract fetchOne(id: string): Promise<T>
}

export abstract class View extends Command {
}

export abstract class ListView<T> extends View {
  abstract fetch(): Promise<T[]>

  async run() {
    const data = await this.fetch()
  }
}

export class User {
  id: string
  name: string

  constructor(opts: {id: string, name: string}) {
    this.id = opts.id
    this.name = opts.name
  }
}

export default class UserSubject extends Subject<User> {
  async fetchAll() {
    const {data} = await axios.get<Array<{id: string, name: string}>>('https://jsonplaceholder.typicode.com/users')
    return data.map(d => new User(d))
  }

  async fetchOne(id: string) {
    const {data} = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
    return new User(data)
  }
}
