class NamebaseBox {
  id = 0;
  orderToSell = [];  // { id: 1, type: 'sell', quantity: 1, price: 1 };
  orderToBuy = [];  // { id: 2, type: 'buy', quantity: 1, price: 1 };
  actionOrders = []; // order with performed actions

  sync(fileName) {
    
  }

  buy (quantity, price) {
    if(this.orderToSell.length === 0) {
      this.orderToBuy.push({
        id: ++this.id,
        quantity,
        price,
        type: 'buy',
      });
    } else {
      let quantityCompleted = 0;
      let orderMatchedCounter = 0;
      let orderToSellIterations = JSON.parse(JSON.stringify(this.orderToSell));

      for (let index = 0; index < orderToSellIterations.length; index++) {
        const item = orderToSellIterations[index];

        if(!(item.price <= price)) continue;
        else ++ orderMatchedCounter;
        
        const currentQuantityRequirement = (quantity - quantityCompleted);
        const isCurrentItemHaveAllOrMore = (item.quantity >= currentQuantityRequirement);

        if (isCurrentItemHaveAllOrMore) {
          if(item.quantity === currentQuantityRequirement) {
            this.orderToSell.splice(index, 1);
          } else {
            // more
            item.quantity = item.quantity - currentQuantityRequirement;
          }
          quantityCompleted = quantityCompleted + item.quantity;
          break;
        } else {
          // having less
          this.orderToSell.splice(index, 1);
          quantityCompleted = quantityCompleted + item.quantity;
        }
      }

      if(orderMatchedCounter === 0) {
        this.orderToBuy.push({
          id: ++this.id,
          quantity,
          price,
          type: 'buy',
        });
      } else if (quantity - quantityCompleted > 0) {
        this.orderToBuy.push({
          id: ++this.id,
          quantity : (quantity - quantityCompleted),
          price,
          type: 'buy',
        });
      }
    }

    // sort by price in descending
    this.orderToBuy = this.orderToBuy.sort((a, b) => (a.price > b.price) ? 1 : -1).reverse();
  }

  sell(quantity, price) {
    this.orderToSell.push({
      id: ++ this.id,
      quantity,
      price,
      type: 'sell'
    });

    // sort by price in ascending
    this.orderToSell = this.orderToSell.sort((a, b) => {
      if(a.price === b.price) {
        return (this.orderToSell.indexOf(a) > this.orderToSell.indexOf(b)) ? 1 : -1;
      } else {
        return (a.price > b.price) ? 1 : -1;
      }
    });
  }

  getQuantityAtPrice(price) {
    const totalBoxOrders = [...this.orderToBuy, ...this.orderToSell];
    const filteredOrders = totalBoxOrders.filter(order => order.price === price);
    const quantity = filteredOrders.length > 0 ? filteredOrders.reduce((accumulator, currentValue) => accumulator.quantity + currentValue.quantity) : 0;
    
    return quantity;
  }

  getOrder(id) {
    const totalBoxOrders = [...this.orderToBuy, ...this.orderToSell];
    return totalBoxOrders.find(order => order.id === id);
  }
}

module.exports = NamebaseBox;