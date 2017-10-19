/* eslint-env mocha */

const { padLeft, padRight } = require('./index')
const { expect } = require('chai')

describe('padLeft', () => {
  it('should return a string', () => {
    expect(padLeft('Hello', 10)).to.be.a.string
    expect(padLeft('Hello', 10, ' ')).to.be.a.string
  })

  it('should throw if length is not a number', () => {
    expect(padLeft.bind('Hello', 'c')).to.throw('Length should be a number')
    expect(padLeft.bind('Hello', 'x', ' ')).to.throw('Length should be a number')
  })

  it('Should return a string of the correct length', () => {
    expect((padLeft('hello', 20)).length).to.equal(20)
    expect((padLeft('hello', 40)).length).to.equal(40)
    expect((padLeft('hello', 50)).length).to.equal(50)
  })

  it('Should be padded with a space if no char parameter is specified', () => {
    expect((padLeft('hello', 10)).substring(0, 5)).to.equal('     ')
    expect((padLeft('hello', 8)).substring(0, 3)).to.equal('   ')
    expect((padLeft('hello', 12)).substring(0, 7)).to.equal('       ')
  })

  it('Should be padded with the specified char if char parameter is specified', () => {
    expect((padLeft('hello', 10, 'k')).substring(0, 5)).to.equal('kkkkk')
    expect((padLeft('hello', 9, 'v')).substring(0, 4)).to.equal('vvvv')
    expect((padLeft('hello', 11, 'a')).substring(0, 6)).to.equal('aaaaaa')
    expect((padLeft('hello', 6, '7')).substring(0, 1)).to.equal('7')
    expect((padLeft('hello', 10, 3)).substring(0, 5)).to.equal('33333')
  })

  it('Should be trimmed to the correct length if the string goes over the required length', () => {
    expect((padLeft('hello', 20, 'vv')).length).to.equal(20)
    expect((padLeft('hello', 9, 'zzz')).substring(0, 4)).to.equal('zzzz')
    expect((padLeft('hello', 11, 'aaaaa')).substring(0, 6)).to.equal('aaaaaa')
    expect((padLeft('hello', 10, '    ')).substring(0, 5)).to.equal('     ')
  })

  it('Should still be a string even if the pad char is a number', () => {
    expect(padLeft('Hello', 10, 1)).to.be.a.string
    expect(padLeft('Hello', 10, 0)).to.be.a.string
  })

  it('Should return the original length string if it is longer than the required length', () => {
    expect(padLeft('Hello', 3, '  ')).to.equal('Hello')
    expect(padLeft('Hello', 3)).to.equal('Hello')
    expect(padLeft('00000', 3, '0')).to.equal('00000')
  })

  it('Should be a left padded string', () => {
    expect((padLeft('hello', 10))).to.equal('     hello')
    expect((padLeft('hello', 8))).to.equal('   hello')
    expect((padLeft('hello', 12))).to.equal('       hello')
    expect((padLeft('hello', 10, 9))).to.equal('99999hello')
    expect((padLeft('hello', 8, 'z'))).to.equal('zzzhello')
    expect((padLeft('hello', 12, 'w'))).to.equal('wwwwwwwhello')
    expect((padLeft('hello', 12, 'ww'))).to.equal('wwwwwwwhello')
  })
})

describe('padRight', () => {
  it('should return a string', () => {
    expect(padRight('Hello', 10)).to.be.a.string
    expect(padRight('Hello', 10, ' ')).to.be.a.string
  })

  it('should throw if length is not a number', () => {
    expect(padRight.bind('Hello', 'c')).to.throw('Length should be a number')
    expect(padRight.bind('Hello', 'x', ' ')).to.throw('Length should be a number')
  })

  it('Should return a string of the correct length', () => {
    expect((padRight('hello', 20)).length).to.equal(20)
    expect((padRight('hello', 40)).length).to.equal(40)
    expect((padRight('hello', 50)).length).to.equal(50)
  })

  it('Should be padded with a space if no char parameter is specified', () => {
    expect((padRight('hello', 10)).slice(-5)).to.equal('     ')
    expect((padRight('hello', 8)).slice(-3)).to.equal('   ')
    expect((padRight('hello', 12)).slice(-7)).to.equal('       ')
  })

  it('Should be padded with the specified char if char parameter is specified', () => {
    expect((padRight('hello', 10, 'k')).slice(-5)).to.equal('kkkkk')
    expect((padRight('hello', 9, 'v')).slice(-4)).to.equal('vvvv')
    expect((padRight('hello', 11, 'a')).slice(-6)).to.equal('aaaaaa')
    expect((padRight('hello', 6, '7')).slice(-1)).to.equal('7')
    expect((padRight('hello', 10, 3)).slice(-5)).to.equal('33333')
  })

  it('Should be trimmed to the correct length if the string goes over the required length', () => {
    expect((padRight('hello', 20, 'vv')).length).to.equal(20)
    expect((padRight('hello', 9, 'zzz')).slice(-4)).to.equal('zzzz')
    expect((padRight('hello', 11, 'aaaaa')).slice(-6)).to.equal('aaaaaa')
    expect((padRight('hello', 10, '    ')).slice(-5)).to.equal('     ')
  })

  it('Should still be a string even if the pad char is a number', () => {
    expect(padRight('Hello', 10, 1)).to.be.a.string
    expect(padRight('Hello', 10, 0)).to.be.a.string
  })

  it('Should return the original length string if it is longer than the required length', () => {
    expect(padRight('Hello', 3, '  ')).to.equal('Hello')
    expect(padRight('Hello', 3)).to.equal('Hello')
    expect(padRight('00000', 3, 0)).to.equal('00000')
  })

  it('Should be a right padded string', () => {
    expect((padRight('hello', 10))).to.equal('hello     ')
    expect((padRight('hello', 8))).to.equal('hello   ')
    expect((padRight('hello', 12))).to.equal('hello       ')
    expect((padRight('hello', 10, 9))).to.equal('hello99999')
    expect((padRight('hello', 8, 'z'))).to.equal('hellozzz')
    expect((padRight('hello', 12, 'w'))).to.equal('hellowwwwwww')
    expect((padRight('hello', 12, 'ww'))).to.equal('hellowwwwwww')
  })
})
