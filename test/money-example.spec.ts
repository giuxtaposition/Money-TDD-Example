import { expect } from "chai";
import { Dollar } from "../src/index";

/* 
[] $5 + 10 CHF = $10 if rate is 2:1
[x] $5 * 2 = $10
[] Make “amount” private
[] Dollar side effects?
[] Money rounding?
*/

describe("Money Example: ", function () {
  it("test multiplication", function () {
    let five: Dollar = new Dollar(5);
    five.times(2);
    expect(five.amount).to.equal(10);
  });
});
