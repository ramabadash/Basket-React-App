import { Component } from 'react';
import { GroceriesItem } from './GroceriesItem';
import '../styles/GeroceriesList.css';

export class GroceriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main>
        <h2>
          <i class='fas fa-leaf'></i>
          Groceries:
        </h2>
        <ul className='groceries-list'>
          {this.props.groceriesArr.map((item) => (
            <GroceriesItem item={item} />
          ))}
        </ul>
      </main>
    );
  }
}
