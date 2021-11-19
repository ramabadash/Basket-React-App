import { Component } from 'react';

export class BasketList extends Component {
  constructor(props) {
    super(props);
    this.state = { basketItems: this.props.basketItems };
  }
  render() {
    return (
      <>
        <h2>
          <i className='fas fa-shopping-basket logo'></i>
          Basket:
        </h2>
        <ul className='basket-list'>{this.generateItemsToBasket()}</ul>
      </>
    );
  }
  generateItemsToBasket() {
    const itemsArr = [];
    const basketItems = this.state.basketItems;
    for (const item in basketItems) {
      itemsArr.push(
        //TODO - replace to BasketItem component
        <li key={item}>
          <i className='far fa-minus-square'></i>
          {basketItems[item]} {item}
        </li>
      );
    }
    return itemsArr;
  }
}
