// writing a testing framework
/*

Let's improve our error messages a bit, create a function
called `test` which can be given a title and a callback.

Then add a try/catch so you can log the title with
a note of success or error.

Then wrap each of your tests in a `test` function.

This also means that we can run all the tests even
if one of them fails!

Example of test function
test(title, () => {
  // arrange
  // act
  // assert
})

Then run this code with `node 3.todo`

> Make sure you're in the right directory!

 */

const {sum, subtract} = require('./math')

// essentially a barebones testing framework!!!
// it has many tests that you can run at same time...

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
  }
}

// Kevin version in a very non ES6 syntatic sugar...just closure and module pattern way...
// function expect(actual) {
//   function toBe(expected) {
//     if (actual !== expected) {
//       throw new Error(`${actual} is not equal to ${expected}`)
//     }
//   }

//   return {
//     toBe,
//   }
// }

function test(title, callback) {
  try {
    callback() // if our expect fn doesn't throw new Error
    console.log(`✅ ${title}`) // it will hit this line...
  } catch (error) {
    // if our expect function trips up on throw new Error
    console.error(`🛑 ${title}`) // it will go directly here and checkmark title will never see light of day
    console.error(error)
  }
}

// as user of jest this is the only format i need to worry about...
// building test, and expect API is just flexing but really great understanding...
test('sum adds numbers', () => {
  const result = sum(3, 7)
  const expected = 10
  expect(result).toBe(expected)
})

test('subtract subtract number', () => {
  // arrange, act, assert
  // this is more act, arrange, assert though??
  const result = subtract(3, 7)
  const expected = -4
  expect(result).toBe(expected) //assert
})
