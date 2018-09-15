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

const view: svo.View<User> = {
  id: {
    get: row => row.id
  },
  name: {},
}

export default svo.subject({
  verbs: {
    list: svo.list({
      view,
      async fetch() {
        const {data} = await axios.get<Array<{id: string, name: string}>>('https://jsonplaceholder.typicode.com/users')
        return data.map(d => new User(d))
      }
    })
  },
})
