/* eslint-env mocha */
const { factorial } = require('./factorial')
const { expect } = require('chai')

describe('factorial', () => {
  it('Should return a number.', () => {
    expect(factorial(5)).to.be.a('number')
  })

  it('Should throw if given an out of bounds input.', () => {
    expect(() => factorial(0)).to.throw('Factorial needs to be a positive number greater than 1.')
    expect(() => factorial(0.5)).to.throw('Factorial needs to be a positive number greater than 1.')
    expect(() => factorial('meow')).to.throw('Factorial needs to be a positive number greater than 1.')
  })

  it('should return a correct factorial', () => {
    expect(factorial(3)).to.equal(6)
    expect(factorial(4)).to.equal(24)
    expect(factorial(5)).to.equal(120)
  })
})