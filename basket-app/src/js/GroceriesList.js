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
      <div className='groceries-container'>
        <h2>
          <i className='fas fa-leaf'></i>
          Groceries:
        </h2>
        <ul className='groceries-list'>
          {this.props.groceriesArr.map((item) => (
            <GroceriesItem key={item} item={item} addItem={this.props.onItemClick} />
          ))}
        </ul>
      </div>
    );
  }
}
