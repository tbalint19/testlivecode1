const getPostWithMostHearts = require('./businessLogic')

const testUser1 = require('./data')

const expect = (description, functionCall, expectedResult) => {
  const result = functionCall
  if (result === expectedResult) {
    console.log("Test passed:", description)
  } else {
    console.error(`Test failed: expected ${result} to be ${expectedResult}`, description);
  }
}

expect(
  "getPostWithMostHearts should Return Null If List Is Empty",
  getPostWithMostHearts([]), null
)
expect(
  "getPostWithMostHearts should return only post if one post exists and it has hearts",
  getPostWithMostHearts([testUser1]).id, 2
)
