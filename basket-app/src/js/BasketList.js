import { Component } from 'react';
import { BasketItem } from './BasketItem';
import '../styles/BasketList.css';

export class BasketList extends Component {
  render() {
    return (
      <div className='basket-container'>
        <h2>
          <i className='fas fa-shopping-basket'></i>
          Basket:
        </h2>
        <label onClick={() => this.props.onClearBasket()}>
          <i className='fas fa-trash trash'></i>
        </label>
        <ul className='basket-list'>{this.generateItemsToBasket()}</ul>
      </div>
    );
  }
  generateItemsToBasket() {
    const itemsArr = [];
    const basketItems = this.props.basketItems;
    if (!!Object.keys(basketItems).length) {
      for (const item in basketItems) {
        itemsArr.push(<BasketItem key={item} number={basketItems[item]} item={item} />);
      }
    } else {
      itemsArr.push(<BasketItem key='clear' number='' item='No items in youre basket!' />);
    }
    return itemsArr;
  }
}
