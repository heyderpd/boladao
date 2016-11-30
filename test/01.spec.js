// requided's

const assert = require('assert')
const fs = require('fs')

const boladao = require('../npm/index')

const dict = {
  'bolar': true,
  'bolado': true,
  'bolados': true,
  'bolando?': true,
  'boladinho': true,
  'boladinhos': true,
  'bolacha?': true,
  'boladão': true,
  'boladões': true,
  'biscoito?': true,
  'boladamente?': true,
}

const testeBoladao = () => {
  const boladamente = boladao()
  console.log('=>', boladamente)
  return dict[boladamente]
}

// start test

describe('heyder', function() {
  it('boladao', function() {
    let limit = 100
    while (limit--) {
    assert.deepEqual(
      testeBoladao(),
      true)
    }
  })
})
