
/*!
 * boladao
 * Copyright (c) 2016 heyderpd <heyderpd@gmail.com>
 * MIT Licensed
 */

const { length } = require('pytils')
const DICT = require('dictany')
const tendentious = require('random-tendentious')

const keys = {
  first: ['verbo', 'normal', 'pouco', 'muito'],
  second: ['eu', 'nos']
}

const randomFirst = () => 
  Math.floor(
    tendentious({
      f: Math.random,
      l: [1, length(keys.first) +1.5] })() )

const randomSecond = () => 
  Math.floor(
    tendentious({
      f: Math.random,
      l: [1, length(keys.second) +1.5] })() )

const getWords = (level, position) => (
  keys[level][position])

const getSeed = () =>
  [ getWords('second', randomSecond()),
    getWords('first',  randomFirst()) ].join(' ')

const DicionarioBoladao = DICT({
  '*verbo*': 'bolar',
  '*normal*': DICT({
    '*eu*': 'bolado',
    '*nos*': 'bolados',
    'DEFAULT': 'bolando?'
  }),
  '*pouco*': DICT({
    '*eu*': 'boladinho',
    '*nos*': 'boladinhos',
    'DEFAULT': 'bolacha?'
  }),
  '*muito*': DICT({
    '*eu*': 'boladão',
    '*nos*': 'boladões',
    'DEFAULT': 'biscoito?'
  }),
  'DEFAULT': 'boladamente?'
})

const main = () =>
  DicionarioBoladao( getSeed() )

module.exports = main
