/* Copyright (c) 2012-2014 Richard Rodger */

'use strict'


module.exports = function (options) {
  this.add({role: 'error-test'}, function (args, cb) {
    var seneca = this

    if ('bad' === args.how) {
      throw seneca.bad(new Error('error_code1'))
    }
    else if ('errobj' === args.how) {
      throw new Error('an Error object')
    }
    else if ('str' === args.how) {
      throw new Error('a string error')
    }
    else if ('obj' === args.how) {
      throw new Error({bad: 1})
    }
    else if ('cb-err' === args.how) {
      return cb(new Error('cb-err'))
    }
    else if ('cb-obj' === args.how) {
      return cb({bad: 2})
    }
    else if ('cb-cb-err' === args.how) {
      return cb(new Error('cb-cb-err'))
    }
    else cb()
  })

  return {name: 'error-test'}
}
