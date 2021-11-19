import { Component } from 'react';
import '../styles/GeroceriesItem.css';

export class GroceriesItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='item-container'>
        <label className='plus'>
          <i class='far fa-plus-square'></i>
        </label>
        <li className='grocery-item'> {this.props.item} </li>
      </div>
    );
  }
}
