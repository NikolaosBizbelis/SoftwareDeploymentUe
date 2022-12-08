var assert = require("assert");
const h = require('../src/hi');
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("Hello", function () {
  it("should return hello world", function () {
    assert.equal(h.helloWorld(), "Hello World");
  });
});
