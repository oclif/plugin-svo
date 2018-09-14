simple
======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/simple.svg)](https://npmjs.org/package/simple)
[![CircleCI](https://circleci.com/gh/jdxcode/simple/tree/master.svg?style=shield)](https://circleci.com/gh/jdxcode/simple/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/jdxcode/simple?branch=master&svg=true)](https://ci.appveyor.com/project/jdxcode/simple/branch/master)
[![Codecov](https://codecov.io/gh/jdxcode/simple/branch/master/graph/badge.svg)](https://codecov.io/gh/jdxcode/simple)
[![Downloads/week](https://img.shields.io/npm/dw/simple.svg)](https://npmjs.org/package/simple)
[![License](https://img.shields.io/npm/l/simple.svg)](https://github.com/jdxcode/simple/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g simple
$ simple COMMAND
running command...
$ simple (-v|--version|version)
simple/0.0.0 darwin-x64 node-v10.10.0
$ simple --help [COMMAND]
USAGE
  $ simple COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`simple hello [FILE]`](#simple-hello-file)
* [`simple help [COMMAND]`](#simple-help-command)

## `simple hello [FILE]`

describe the command here

```
USAGE
  $ simple hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ simple hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/jdxcode/simple/blob/v0.0.0/src/commands/hello.ts)_

## `simple help [COMMAND]`

display help for simple

```
USAGE
  $ simple help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.2/src/commands/help.ts)_
<!-- commandsstop -->
