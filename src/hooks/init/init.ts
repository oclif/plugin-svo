import {Hook} from '@oclif/config'

const hook: Hook<'init'> = async function (opts) {
  if (opts.id && opts.id.startsWith('@')) {
    console.error('whoa bro')
    this.exit(0)
  }
}

export default hook
