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
      <div className='basket-container'>
        <h2>
          <i className='fas fa-shopping-basket logo'></i>
          Basket:
        </h2>
        <label onClick={() => this.props.onClearBasket()}>
          <i className='fas fa-trash'></i>
        </label>
        <ul className='basket-list'>{this.generateItemsToBasket()}</ul>
      </div>
    );
  }
  generateItemsToBasket() {
    // this.setState({ basketItems: this.props.basketItems });
    console.log(this.props.basketItems);
    const itemsArr = [];
    const basketItems = this.state.basketItems;
    for (const item in basketItems) {
      itemsArr.push(<BasketItem key={item} number={basketItems[item]} item={item} />);
    }
    return itemsArr;
  }
}
