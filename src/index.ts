export abstract class Money {
  protected _amount: number;

  constructor(amount: number) {
    this._amount = amount;
  }

  public equals(object: object): boolean {
    let money: Money = object as Money;
    return (
      this._amount === money._amount &&
      this.constructor.name === money.constructor.name
    );
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }

  abstract times(multiplier: number): Money;

  get amount() {
    return this._amount;
  }
}

export class Dollar extends Money {
  times(multiplier: number): Money {
    return new Dollar(this._amount * multiplier);
  }
}

export class Franc extends Money {
  times(multiplier: number): Money {
    return new Franc(this._amount * multiplier);
  }
}
