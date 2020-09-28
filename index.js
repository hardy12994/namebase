const NamebaseBox = require('./src/namebaseBox');

const namebaseBox = new NamebaseBox();

namebaseBox.buy(10, 2);
console.log('buy', namebaseBox.orderToBuy);
console.log('sell', namebaseBox.orderToSell);
console.log('....');

namebaseBox.buy(5, 3);
console.log('buy', namebaseBox.orderToBuy);
console.log('sell', namebaseBox.orderToSell);
console.log('....');


namebaseBox.sell(50, 8);
console.log('buy', namebaseBox.orderToBuy);
console.log('sell', namebaseBox.orderToSell);
console.log('....');

namebaseBox.sell(5, 12);
console.log('buy', namebaseBox.orderToBuy);
console.log('sell', namebaseBox.orderToSell);
console.log('....');


namebaseBox.buy(51, 9);
console.log('buy', namebaseBox.orderToBuy);
console.log('sell', namebaseBox.orderToSell);
console.log('....');


console.log('geting order ---', namebaseBox.getOrder(5));

namebaseBox.sell(10, 12);
console.log('buy', namebaseBox.orderToBuy);
console.log('sell', namebaseBox.orderToSell);
console.log('....');

namebaseBox.sell(1, 12);
console.log('buy', namebaseBox.orderToBuy);
console.log('sell', namebaseBox.orderToSell);
console.log('....');

namebaseBox.sell(2, 12);
console.log('buy', namebaseBox.orderToBuy);
console.log('sell', namebaseBox.orderToSell);
console.log('....');

namebaseBox.buy(15, 13);
console.log('buy', namebaseBox.orderToBuy);
console.log('sell', namebaseBox.orderToSell);
console.log('....');


console.log('getting quantity of price 12 ---', namebaseBox.getQuantityAtPrice(12));
console.log('getting quantity of price 13 ---', namebaseBox.getQuantityAtPrice(13));




























// console.log('get order', namebaseBox.getOrder(4));
// console.log('get prize match orders', namebaseBox.getQuantityAtPrice(2));


