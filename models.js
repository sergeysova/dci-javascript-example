
// Mock data
const __accounts = [
  {
    id: 1,
    balance: 2300,
  },
  {
    id: 2,
    balance: 780,
  },
  {
    id: 3,
    balance: 25,
  },
  {
    id: 4,
    balance: 0,
  },
  {
    id: 5,
    balance: 95,
  },
];


// Common account model
exports.Account =
class Account {
  static find(id) {
    const founded = __accounts.filter(it => it.id === id)[0];

    if (!founded)
    throw new Error(`Not found: Account with id #${id} not found!`);

    const acc = new Account(founded.id, founded.balance);

    console.log(`Finded account ${acc.id} width balance ${acc.balance}`);
    return acc;
  }

  constructor(id, balance) {
    this._balance = balance;
    this._id = id;
  }

  get balance() {
    return this._balance;
  }

  get id() {
    return this._id;
  }

  balanceIncrease(amount) {
    this._balance += amount;
    console.log(`Balance change: User ${this._id}; +${amount}; =${this._balance}`);
  }

  balanceDecrease(amount) {
    this._balance -= amount;
    console.log(`Balance change: User ${this._id}; -${amount}; =${this._balance}`);
  }
}
