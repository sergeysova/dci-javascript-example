
const { Account } = require('./models');
const { TransferringMoney } = require('./contexts');

console.log('DCIP init');

TransferringMoney.transfer(1, 2, 300);

console.log('DCIP destroy');
