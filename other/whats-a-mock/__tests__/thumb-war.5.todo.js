// use the jest __mocks__ directory
import thumbWar from '../thumb-war'
import * as utilsMock from '../utils'

// remove the inline mock function and jest
// will use the one that exists in the
// __mocks__ directory which I created for you
// already (you're welcome)
// REMOVED!
// jest.mock('../utils', () => {
//   return {
//     getWinner: jest.fn((p1, p2) => p2),
//   }
// })
jest.mock('../utils') //implictly rummages through __mocks__ directory
// and every function being executed here will first check the __mocks__ directory to see if a helper function is being called there...
// thumbWar(a, b) // js goes...okay this getWinner() let me see if this is in the __mocks__ directory
// okay, it is...I'm gonna execute that instead of the true getWinner which is randomized...

test('returns winner', () => {
  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utilsMock.getWinner).toHaveBeenCalledTimes(2)
  utilsMock.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
  })
})

/*
Hint below





















































Hint #1:

jest.mock(relativePathToModuleToMock)




 */
