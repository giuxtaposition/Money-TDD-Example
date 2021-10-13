import { assert } from "chai";
import { Money } from "../src/index";

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
[x] Common times
[x] Compare Francs with Dollars
[x] Currency?
[] Delete testFrancMultiplication
*/

describe("Dollar: ", function () {
  it("test multiplication", function () {
    let five: Money = Money.dollar(5);
    assert.isTrue(five.times(2).equals(Money.dollar(10)));
    assert.isTrue(five.times(3).equals(Money.dollar(15)));
  });

  it("test equality", function () {
    assert.isTrue(Money.dollar(5).equals(Money.dollar(5)));
    assert.isNotTrue(Money.dollar(6).equals(Money.dollar(5)));
  });
});

describe("Franc: ", function () {
  it("test multiplication", function () {
    let five: Money = Money.franc(5);
    assert.isTrue(five.times(2).equals(Money.franc(10)));
    assert.isTrue(five.times(3).equals(Money.franc(15)));
  });

  it("test equality", function () {
    assert.isTrue(Money.franc(5).equals(Money.franc(5)));
    assert.isNotTrue(Money.franc(6).equals(Money.franc(5)));
  });
});

describe("Money: ", function () {
  it("test equality between Francs and Dollars", function () {
    assert.isNotTrue(Money.franc(5).equals(Money.dollar(5)));
  });
  it("test currency", function () {
    assert.equal(Money.dollar(1).currency(), "USD");
    assert.equal(Money.franc(1).currency(), "CHF");
  });
});
