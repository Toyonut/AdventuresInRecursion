# Collatz
JS function for checking the Collatz conjecture

Takes up to 3 parameters.
1. Takes just a number parameter. Expects a positive while integer... even though all numbers in JS are floats.

```javascript
const { collatz } = require('./collatz')

console.log(collatz(990)) -> true
console.log(collatz(999)) -> true
console.log(collatz(10)) -> true

```

**Expectations**
1. Should return a boolean.
2. Should throw if not given a number.
3. Should throw if not given a positive number.
4. Should return true for any positive whole number. (force it to be a whole number if it isn't...)

**Notes**
The Collatz conjecture is a conjecture in mathematics named after Lothar Collatz. It concerns a sequence defined as follows: start with any positive integer n. Then each term is obtained from the previous term as follows: if the previous term is even, the next term is one half the previous term. Otherwise, the next term is 3 times the previous term plus 1. The conjecture is that no matter what value of n, the sequence will always reach 1. [Source](https://en.wikipedia.org/wiki/Collatz_conjecture)

[Relevant XKCD](https://xkcd.com/710/).

This is all done using a recursive function to apply the operations until the output reaches 1. If it hits 1, it returns true. If it goes below 1, it will return an error. <br>
If you run it for all positive numbers and it comes out with a false, there might be a prize in mathematics for you. Although, you might need to refactor to use a JS long library.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
