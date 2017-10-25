function factorial (fact, rounds = fact) {
  if (fact < 0 || typeof fact !== 'number') {
    throw new Error('Factorial needs to be a positive number greater than 1.')
  }

  // We only like whole numbers here.
  fact = Math.floor(fact)

  if (rounds === 0) {
    // maths edge case https://www.mathsisfun.com/numbers/factorial.html.
    return 1
  } else if (rounds === 1) {
    return fact
  } else {
    rounds -= 1
    // multiply the previous number by the curent round
    // 5 * 4 -> 20 * 3 -> 60 * 2 -> 120 * 1 and return at 1
    return factorial((fact * rounds), rounds)
  }
}

module.exports = { factorial }
