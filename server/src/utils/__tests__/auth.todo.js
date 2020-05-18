// npm test
// p
// utils.*auth.todo

// or
// npm test utils.*auth.todo

/*
meaning behind __tests__ 
https://jestjs.io/docs/en/configuration#testmatch-array-string

by default: jest looks for .js, .jsx, .ts, .tsx files inside of __tests__ folders 
as well as any files with a suffix of .test or .spec
it will also find files called test.js or spec.js
*/

// take a step back...and think of user of that software...
// end user won't be using isPasswordAllowed explicitly...

import {isPasswordAllowed, userToJSON} from '../auth'
// import {omit} from 'lodash'
//webpack implicity brings in userToJSON dependencies with it
// no need to bring it in...

// describe is probably a bit more scaleable...
// kent not a huge fan of describe...
describe('isPasswordAllowed', () => {
  const allowedPasswords = ['sfkl.e903f.s']
  const disallowedPasswords = ['', 'fffffffffff', '888888888']

  allowedPasswords.forEach(pwd => {
    it(`"${pwd}" should be allowed`, () => {
      expect(isPasswordAllowed(pwd)).toBe(true)
    })
  })

  disallowedPasswords.forEach(pwd => {
    it(`"${pwd}" should be allowed`, () => {
      expect(isPasswordAllowed(pwd)).toBe(false)
    })
  })
})

// same as above...
test('isPasswordAllowed only allows some passwords', () => {
  // here's where I'll demo things for you :)
  // expect.assertions(4) // ken: this is fine...but he finds it annoying...
  // ken likes to purposefully break the source code to ensure the tests are running
  expect(isPasswordAllowed('')).toBe(false)
  expect(isPasswordAllowed('fffffffffffff')).toBe(false)
  expect(isPasswordAllowed('8888888888888')).toBe(false)
  expect(isPasswordAllowed('sfkl.e903f.s')).toBe(true)
})

test('userToJSON excludes secure properties', () => {
  // Here you'll need to create a test user object
  // pass that to the userToJSON function
  // and then assert that the test user object
  // doesn't have any of the properties it's not
  // supposed to.
  // Here's an example of a user object:

  // much elegance
  const safeUser = {
    id: 'some-id',
    username: 'sarah',
  }

  // es6 destructuring...such wow
  const user = {
    ...safeUser,
    // ↑ above are properties which should
    // be present in the returned object

    // ↓ below are properties which shouldn't
    // be present in the returned object
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string',
  }

  const jsonUser = userToJSON(user)
  expect(jsonUser).toEqual(safeUser)
  // toEqual is like JSON.stringify(obj1) == JSON.stringify(obj2)
  // toBe is like ===
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=auth%20util&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
