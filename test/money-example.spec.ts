import { expect, assert } from "chai";
import { Dollar, Franc } from "../src/index";

/* 
[] $5 + 10 CHF = $10 if rate is 2:1
[x] $5 * 2 = $10
[X] Make “amount” private
[x] Dollar side effects?
[] Money rounding?
[X] equals()
[] hashCode()
[] Equal null
[] Equal object
[x] 5 CHF * 2 = 10 CHF
[] Dollar/Franc duplication
[x] Common equals
[] Common times
*/

describe("Dollar: ", function () {
  it("test multiplication", function () {
    let five: Dollar = new Dollar(5);
    assert.isTrue(five.times(2).equals(new Dollar(10)));
    assert.isTrue(five.times(3).equals(new Dollar(15)));
  });

  it("test equality", function () {
    assert.isTrue(new Dollar(5).equals(new Dollar(5)));
    assert.isNotTrue(new Dollar(6).equals(new Dollar(5)));
  });
});

describe("Franc: ", function () {
  it("test multiplication", function () {
    let five: Franc = new Franc(5);
    assert.isTrue(five.times(2).equals(new Franc(10)));
    assert.isTrue(five.times(3).equals(new Franc(15)));
  });

  it("test equality", function () {
    assert.isTrue(new Franc(5).equals(new Franc(5)));
    assert.isNotTrue(new Franc(6).equals(new Franc(5)));
  });
});
