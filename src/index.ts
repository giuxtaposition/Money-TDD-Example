export class Dollar {
  private _amount: number;
  constructor(amount: number) {
    this._amount = amount;
  }

  times(multiplier: number) {
    return new Dollar(this._amount * multiplier);
  }

  equals(object: Dollar) {
    let dollar: Dollar = object;
    return this._amount === dollar._amount;
  }

  get amount() {
    return this._amount;
  }
}

export class Franc {
  private _amount: number;
  constructor(amount: number) {
    this._amount = amount;
  }

  times(multiplier: number) {
    return new Franc(this._amount * multiplier);
  }

  equals(object: Franc) {
    let franc: Franc = object;
    return this._amount === franc._amount;
  }

  get amount() {
    return this._amount;
  }
}
