import { Component } from 'react';
import { groceriesArr } from '../data/groceriesData';
import { GroceriesList } from './GroceriesList';

export class Main extends Component {
  render() {
    return (
      <main>
        <GroceriesList groceriesArr={groceriesArr} />
        <h2> Basket List </h2> {/* TODO - replace with component - BasketList*/}
      </main>
    );
  }
}
