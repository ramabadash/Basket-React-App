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
  //Show only bought items
  showPurchsed(event) {
    event.target.classList.add('active'); //show label as active
    const basketItemsElem = document.querySelectorAll('.basket-item');
    basketItemsElem.forEach((item) => {
      if (!item.classList.contains('bought')) {
        item.classList.add('hide');
      } else {
        return;
      }
    });
  }
}
