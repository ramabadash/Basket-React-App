import { Component } from 'react';
import '../styles/BasketItem.css';

export class BasketItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <li className='basket-item' onClick={this.markAsBought} name={this.props.item}>
        <i className='far fa-minus-square'></i> {this.props.number} {this.props.item}
      </li>
    );
  }
  markAsBought = (event) => {
    if (event.target.tagName !== 'li') {
      event.target.closest('li').classList.toggle('bought'); //Click on the li child element
    } else {
      event.target.classList.toggle('bought'); //Click on the li element
    }
  };
}
