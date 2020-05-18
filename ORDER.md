it starts with

#1
`whats-a-test`

you basically build jest functionalities from ground up here...

brilliantly leads you down the jest path...

#2
`jest-expect`

expect-assertions.js shows you a list of popular testing methods of jest, and mock functions

toBe is like ===

toEqual is like JSON.stringify(obj1) === JSON.stringify(obj2)

toMatch does partial match...is the actual present in the subject?

mockFunctions

#3 coverage
`coverage/lcov-report/index.html`

just run `jest --coverage` to generate test coverage files...

100% coverage is very misleading...you either went too far...

100% can be meaningless if you're testing the wrong things...or your tests are broken...

#4
`whats-a-mock`
A series of thumb-war tests...

**tests**

when you run `jest` at root...it will go through all the directory and check for folders named **tests** and run anything inside there with a .js extension

We pretend that thumb-war uses some complicated external API and mock up its results to be non-deterministic...

i.e. monkey-patching...

#5
Unit test for express middleware

worth going over again slowly...
`server/src/controllers/__tests`
