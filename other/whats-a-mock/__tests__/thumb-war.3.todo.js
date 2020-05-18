// using jest utilities
import thumbWar from '../thumb-war'
import * as utils from '../utils'

test('returns winner', () => {
  // replace these lines with a call to jest.spyOn and
  // call to mockImplementation on the mocked function (See hint #1)
  // REPLACED:
  // const originalGetWinner = utils.getWinner
  // WITH:
  jest.spyOn(utils, 'getWinner') // TLDR
  // getWinner is now a jest mock function...and has bunch of API's like mockImplementation available now...
  utils.getWinner.mockImplementation = (p1, p2) => p2

  // again magically, thumbWar will will now refer to utils.getWinner.mockImplementation when it needs to execute getWinner
  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner).toHaveBeenCalledTimes(2) // called twice, because Thumbwar is best of three but we're letting p2 win everytime in our mockImplementation

  // this line seems too magical however...does our mock function getWinner now have mock.calls as an empty array now? my guess is yes...
  utils.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
  })

  // replace the next two lines with a restoration of the original function
  // (See hint #2)
  // REPLACED:
  // utils.getWinner = originalGetWinner
  // WITH:
  utils.getWinner.mockRestore()
})

/*
Hints below









































































Hint #1:

Here's an example of those APIs:

const myObject = {foo: () => 'bar'}
jest.spyOn(myObject, 'foo')
myObject.foo.mockImplementation(() => 'not-bar')
myObject.foo() === 'not-bar' // true


See the solution file for the solution









Hint #2:

If we wanted to restore the mocked `myObject.foo` function
to its original implementation, we could do:
myObject.foo.mockRestore()

And then the original implementation will be called.
myObject.foo() === 'bar' // true


 */
