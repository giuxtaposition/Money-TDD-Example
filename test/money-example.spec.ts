import { expect, assert } from "chai";
import { Dollar } from "../src/index";

/* 
[] $5 + 10 CHF = $10 if rate is 2:1
[x] $5 * 2 = $10
[] Make “amount” private
[x] Dollar side effects?
[] Money rounding?
[] equals()
[] hashCode()
*/

describe("Money Example: ", function () {
  it("test multiplication", function () {
    let five: Dollar = new Dollar(5);
    let product: Dollar = five.times(2);
    expect(product.amount).to.equal(10);
    product = five.times(3);
    expect(product.amount).to.equal(15);
  });

  it("test equality", function () {
    assert.isTrue(new Dollar(5).equals(new Dollar(5)));
    assert.isNotTrue(new Dollar(6).equals(new Dollar(5)));
  });
});
