
const { Account } = require('./models');


// First role
class SourceAccount {
  constructor(context, account) {
    this.context = context;
    this.account = account;
  }

  transferOut(amount) {
    if (this.account.balance < amount)
      throw new Error('Transfer money error: Insufficient funds');

    console.log(`Transfer out ${amount}; from ${this.account.id}`);
    this.account.balanceDecrease(amount);
    this.context.destination.transferIn(amount);
  }
}


// Second role
class DestinationAccount {
  constructor(context, account) {
    this.context = context;
    this.account = account;
  }

  transferIn(amount) {
    console.log(`Transfer in ${amount}; to ${this.account.id}`);
    this.account.balanceIncrease(amount);
  }
}


// Common context
exports.TransferringMoney =
class TransferringMoney {

  static transfer(sourceAccountId, destinationAccountId, amount) {
    const source = Account.find(sourceAccountId);
    const dest = Account.find(destinationAccountId);
    const context = new TransferringMoney(source, dest);

    return context.transfer(amount);
  }

  constructor(sourceAccount, destAccount) {
    this.source = new SourceAccount(this, sourceAccount);
    this.destination = new DestinationAccount(this, destAccount);
  }

  transfer(amount) {
    this.source.transferOut(amount);
    console.log(`Transfer ${amount}; from ${this.source.account.id}; to ${this.destination.account.id}; complete!`);
  }
}
