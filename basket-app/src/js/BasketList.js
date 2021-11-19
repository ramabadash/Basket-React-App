import { Component } from 'react';

export class BasketList extends Component {
  constructor(props) {
    super(props);
    this.state = { basketItems: this.props.basketItems };
  }
  render() {
    return (
      <>
        <h2>
          <i className='fas fa-shopping-basket logo'></i>
          Basket:
        </h2>
      </>
    );
  }
