class Money {
  protected _amount: number;

  constructor(amount: number) {
    this._amount = amount;
  }

  equals(object: object) {
    let money: Money = object as Money;
    return this._amount === money.amount;
  }

  get amount() {
    return this._amount;
  }
}

export class Dollar extends Money {
  times(multiplier: number) {
    return new Dollar(this._amount * multiplier);
  }
}

export class Franc extends Money {
  times(multiplier: number) {
    return new Franc(this._amount * multiplier);
  }
}
