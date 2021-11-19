import { Component } from 'react';
import '../styles/BasketItem.css';

export class BasketItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <li className='basket-item'>
        <i className='far fa-minus-square'></i>
        {this.props.number} {this.props.item}
      </li>
    );
  }
}
