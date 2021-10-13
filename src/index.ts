export abstract class Money {
  protected _amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
    this._amount = amount;
    this._currency = currency;
  }

  public equals(object: object): boolean {
    let money: Money = object as Money;
    return (
      this._amount === money._amount &&
      this.constructor.name === money.constructor.name
    );
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount, "USD");
  }

  static franc(amount: number): Franc {
    return new Franc(amount, "CHF");
  }

  abstract times(multiplier: number): Money;

  currency() {
    return this._currency;
  }

  amount() {
    return this._amount;
  }
}

export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  times(multiplier: number): Money {
    return Money.dollar(this._amount * multiplier);
  }

  currency(): string {
    return this._currency;
  }
}

export class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  times(multiplier: number): Money {
    return Money.franc(this._amount * multiplier);
  }

  currency(): string {
    return this._currency;
  }
}
