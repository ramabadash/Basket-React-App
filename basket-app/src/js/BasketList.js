import { Component } from 'react';
import { BasketItem } from './BasketItem';
import '../styles/BasketList.css';

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
      itemsArr.push(<BasketItem key={item} number={basketItems[item]} item={item} />);
    }
    return itemsArr;
  }
}
