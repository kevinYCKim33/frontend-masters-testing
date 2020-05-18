// PLOT TWIST!!! YOU JUST CODED UP JEST!!!
// jest 4.js do it!!!

// Now we can remove our own little framework
// and run this file with jest!
// Run `./jest`
const {sum, subtract} = require('./math')

// 1: ARRANGE, 2: ACT, 3: ASSERT
test('sum adds numbers', () => {
  const result = sum(3, 7)
  const expected = 10
  expect(result).toBe(expected)
})

test('subtract subtracts numbers', () => {
  const result = subtract(7, 3)
  const expected = 4
  expect(result).toBe(expected)
})
