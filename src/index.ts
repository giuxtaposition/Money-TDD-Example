export class Dollar {
  _amount: number;
  constructor(amount: number) {
    this._amount = amount;
  }

  times(multiplier: number) {
    this._amount *= multiplier;
  }

  get amount() {
    return this._amount;
  }
}
