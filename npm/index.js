'use strict';

/*!
 * boladao
 * Copyright (c) 2016 heyderpd <heyderpd@gmail.com>
 * MIT Licensed
 */

var _require = require('pytils');

var length = _require.length;

var DICT = require('dictany');
var tendentious = require('random-tendentious');

var keys = {
  first: ['verbo', 'normal', 'pouco', 'muito'],
  second: ['eu', 'nos']
};

var randomFirst = function randomFirst() {
  return Math.floor(tendentious({
    f: Math.random,
    l: [1, length(keys.first) + 1.5] })());
};

var randomSecond = function randomSecond() {
  return Math.floor(tendentious({
    f: Math.random,
    l: [1, length(keys.second) + 1.5] })());
};

var getWords = function getWords(level, position) {
  return keys[level][position];
};

var getSeed = function getSeed() {
  return [getWords('second', randomSecond()), getWords('first', randomFirst())].join(' ');
};

var DicionarioBoladao = DICT({
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
});

var main = function main() {
  return DicionarioBoladao(getSeed());
};

module.exports = main;
