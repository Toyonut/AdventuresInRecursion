'use strict'

function padLeft (checkString, requiredLength, padChar = ' ') {
  if (typeof requiredLength !== 'number') {
    throw new TypeError('Length parameter should be a number')
  }

  if (checkString.length >= requiredLength) {
    return checkString
  }

  let paddedString = `${padChar}${checkString}`

  if (paddedString.length > requiredLength) {
    let trimAmount = paddedString.length - requiredLength // gives positive number to trim from start of string.
    return paddedString.slice(trimAmount)
  }

  return padLeft(paddedString, requiredLength, padChar)
}

function padRight (checkString, requiredLength, padChar = ' ') {
  if (typeof requiredLength !== 'number') {
    throw new TypeError('Length parameter should be a number')
  }

  if (checkString.length >= requiredLength) {
    return checkString
  }

  let paddedString = `${checkString}${padChar}`

  if (paddedString.length > requiredLength) {
    let trimAmount = (requiredLength - paddedString.length) // gives negative number to trim from end of string
    return paddedString.slice(0, trimAmount)
  }

  return padRight(paddedString, requiredLength, padChar)
}

module.exports = { padLeft, padRight }
