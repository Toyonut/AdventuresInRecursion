function factorial (fact, rounds = fact) {
  if (fact < 1 || typeof fact !== 'number') {
    throw new Error('Factorial needs to be a positive number greater than 1.')
  }

  // We only like whole numbers here.
  fact = Math.floor(fact)

  if (rounds === 1) {
    return fact
  } else {
    rounds -= 1
    return factorial((fact * rounds), rounds)
  }
}

module.exports = { factorial }
