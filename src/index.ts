export class Money implements Expression {
  protected _amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
    this._amount = amount;
    this._currency = currency;
  }

  public equals(object: object): boolean {
    const money: Money = object as Money;
    return (
      this._amount === money._amount && this.currency() === money.currency()
    );
  }

  public reduce(bank: Bank, to: string): Money {
    const rate: number = bank.rate(this._currency, to);
    return new Money(this._amount / rate, to);
  }

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }

  public times(multiplier: number): Expression {
    return new Money(this._amount * multiplier, this._currency);
  }

  plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  currency() {
    return this._currency;
  }

  get amount(): number {
    return this._amount;
  }
}

export interface Expression {
  reduce(bank: Bank, to: string): Money;
  plus(addend: Expression): Expression;
  times(multiplier: number): Expression;
}

type Rates = {
  pair: Pair;
  rate: number;
};
export class Bank {
  private rates: Rates[] = [];

  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }
  rate(from: string, to: string): number {
    if (from === to) {
      return 1;
    }
    const rate = this.rates.find(() => new Pair(from, to))?.rate as number;
    return rate;
  }
  addRate(from: string, to: string, rate: number) {
    this.rates.push({ pair: new Pair(from, to), rate });
  }
}

export class Sum implements Expression {
  augend: Expression;
  addend: Expression;

  constructor(augend: Expression, addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }

  public plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  public times(multiplier: number): Expression {
    return new Sum(
      this.augend.times(multiplier),
      this.addend.times(multiplier)
    );
  }

  reduce(bank: Bank, to: string): Money {
    const amount: number =
      this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }
}

class Pair {
  private from: string;
  private to: string;

  constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
  }

  public equals(object: object): boolean {
    const pair: Pair = object as Pair;
    return this.from === pair.from && this.to === pair.to;
  }

  public hashCode(): number {
    return 0;
  }
}
