import { Component } from 'react';
import '../styles/GeroceriesItem.css';

export class GroceriesItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <li className='grocery-item item-container' onClick={this.props.addItem}>
        <i className='far fa-plus-square'></i>
        {this.props.item}
      </li>
    );
  }
}
