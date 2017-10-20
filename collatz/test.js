/* eslint-env mocha */
const { collatz } = require('./collatz')
const { expect } = require('chai')

describe('collatz', () => {
  it('Should return a boolean.', () => {
    expect(collatz(50)).to.be.a('boolean')
  })

  it('Should throw if not given a number.', () => {
    expect(collatz.bind('beams')).to.throw('Input should be a positive integer.')
  })

  it('Should throw if not given a positive number.', () => {
    expect(collatz.bind(-90)).to.throw('Input should be a positive integer.')
  })

  it('Should return true for any positive whole number.', () => {
    expect(collatz(40)).to.be.true
    expect(collatz(500)).to.be.true
    expect(collatz(6000)).to.be.true
    expect(collatz(700000)).to.be.true
    expect(collatz(8000000)).to.be.true
    expect(collatz(90000000)).to.be.true
    expect(collatz(500.6)).to.be.true
    expect(collatz(99999999.99)).to.be.true
  })
})
