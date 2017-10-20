function collatz (num) {
  if (typeof num !== 'number' || num < 0) {
    throw new Error('Input should be a positive integer.')
  }

  if (num < 1) {
    return false
  }

  if (num === 1) {
    return true
  }

  // all numbers in JS are floats, so lets just floor it if someone puts a float in.
  num = Math.floor(num)

  if (num % 2 === 0) {
    return collatz(num / 2)
  } else {
    return collatz((num * 3) + 1)
  }
}

module.exports = { collatz }
