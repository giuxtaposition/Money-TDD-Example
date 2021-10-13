export class Money {
  protected _amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
    this._amount = amount;
    this._currency = currency;
  }

  public equals(object: object): boolean {
    let money: Money = object as Money;
    return (
      this._amount === money._amount && this.currency() === money.currency()
    );
  }

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }

  times(multiplier: number): Money {
    return new Money(this._amount * multiplier, this._currency);
  }

  currency() {
    return this._currency;
  }

  amount() {
    return this._amount;
  }
}
