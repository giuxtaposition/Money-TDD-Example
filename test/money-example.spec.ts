import { expect } from "chai";

describe("Money Example: ", function () {
  it("test multiplication", function () {
    let five: Dollar = new Dollar(5);
    five.times(2);
    expect(five.amount).to.equal(10);
  });
});
