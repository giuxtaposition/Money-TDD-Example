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

  times(multiplier: number): Money {
    return null;
  }

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
    return new Dollar(this._amount * multiplier, this._currency);
  }
}

export class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  times(multiplier: number): Money {
    return new Franc(this._amount * multiplier, this._currency);
  }
}
