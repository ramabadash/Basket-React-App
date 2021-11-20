import { Component } from 'react';
import '../styles/Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        {'Filter by - '}
        <label>All</label>
        {', '}
        <label>Pending</label>
        {', '}
        <label onClick={this.showPurchsed}>Purchased</label>
        <p>
          <i className='far fa-copyright'></i>
          Made by Rama Badash
        </p>
      </footer>
    );
  }
