import { Component } from 'react';
import { groceriesArr } from '../data/groceriesData';
import { BasketList } from './BasketList';
import { GroceriesList } from './GroceriesList';
import '../styles/Main.css';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { basketItems: {} }; //empty basket
  }
  render() {
    return (
      <main>
        <GroceriesList groceriesArr={groceriesArr} onItemClick={this.updateBasket} />
        <BasketList basketItems={this.state.basketItems} onClearBasket={this.clearBasket} />
      </main>
    );
  }

  updateBasket = (event) => {
    let name;
    if (!event.target.textContent) {
      name = event.target.closest('li').textContent; //Click on the li child element
    } else {
      name = event.target.textContent; //Click on the li element
    }
    const basketItems = this.state.basketItems;

    if (basketItems[name]) {
      basketItems[name] += 1;
    } else {
      basketItems[name] = 1; // First click
    }
    this.setState({ basketItems }); //Update basketItems state
  };

  clearBasket = (event) => {
    this.setState({ basketItems: {} });
  };
}
