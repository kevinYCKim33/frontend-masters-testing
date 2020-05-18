// writing an assertion library
/*

Now let's implement our own assertion library.
Create a function called `expect` that accepts an "actual"
and returns an object of assertions.

💰 I want to be able to use it like so:

> expect(actual).toBe(expected)

// Big Problems with this at the moment...

// Very hard to tell which function failed...could investigate stack trace...but why...

// Even if subtract failed...it won't even get to that part of the code...


Then run this code with `node 2.todo`

> Make sure you're in the right directory!

 */

const {sum, subtract} = require('./math')

let result, expected

result = sum(3, 7)
expected = 10

expect(result).toBe(expected)

result = subtract(7, 3)
expected = 4

expect(result).toBe(expected)

// Kevin...lowkey proud of just using closure without thinking twice...
function expect(actual) {
  function toBe(expected) {
    if (actual !== expected) {
      throw new Error(`${actual} is not equal to ${expected}`)
    }
  }

  return {
    toBe,
  }
}

// Kent X Kevin
// function expect(actual) {
//   return {
//     toBe: function(expected) {
//       if (actual !== expected) {
//         throw new Error(`${actual} is not equal to ${expected}`)
//       }
//     }
//   }
// }

// Kent format //ES5 notation
// function expect(actual) {
//   return {
//     toBe(expected) {
//       if (actual !== expected) {
//         throw new Error(`${actual} is not equal to ${expected}`)
//       }
//     }
//   }
// }
