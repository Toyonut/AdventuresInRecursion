# Factorial
JS function for calculating the factorial of a whole positive number.

Takes just a number parameter. Expects a positive whole integer... even though all numbers in JS are floats.

```javascript
const { factorial } = require('./factorial')

console.log(factorial(5)) -> 120

```

**Expectations**
1. Should throw if not given a positive number.
2. Should calculate the correct factorial of the given input.

**Notes**<br>
I tried this counting up from 1 until the input number, but found I needed an extra parameter to track the state of things and it got more complex. Counting down and tracking
It multiplies the previous number by the curent round so 5 * 4 -> 20 * 3 -> 60 * 2 -> 120 * 1 and return at 1.
