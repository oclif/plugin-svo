import * as svo from '@oclif/plugin-svo'
import axios from 'axios'

export class User {
  id: string
  name: string

  constructor(opts: {id: string, name: string}) {
    this.id = opts.id
    this.name = opts.name
  }
}

export default svo.verb.list<User>({
  props: {
    id: {
      get: row => row.id
    },
    name: {},
  },

  async fetchAll() {
    const {data} = await axios.get<Array<{id: string, name: string}>>('https://jsonplaceholder.typicode.com/users')
    return data.map(d => new User(d))
  },

  async fetchOne(id: string) {
    const {data} = await axios.get<{id: string, name: string}>(`https://jsonplaceholder.typicode.com/users/${id}`)
    return new User(data)
  },
}).run()
