import { Component } from 'react';
import '../styles/Header.css';

export class Header extends Component {
  render() {
    return (
      <header className='header'>
        <h1>My Shopping Basket</h1>
        <div>
          <i className='fas fa-shopping-basket logo'></i>
        </div>
      </header>
    );
  }
}
