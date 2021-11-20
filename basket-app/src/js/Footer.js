import { Component } from 'react';
import '../styles/Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        {'Filter by - '}
        <label className='active' onClick={this.showAll}>
          All
        </label>
        {', '}
        <label onClick={this.showPending}>Pending</label>
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
    document.querySelector('.active').classList.remove('active'); //Remove last active label
    event.target.classList.add('active'); //show target label as active
    const basketItemsElem = document.querySelectorAll('.basket-item');
    //Show all basket-items before hiding
    basketItemsElem.forEach((item) => {
      item.classList.remove('hide');
    });
    //Filter
    basketItemsElem.forEach((item) => {
      if (!item.classList.contains('bought')) {
        item.classList.add('hide');
      } else {
        return;
      }
    });
  }
  //Show all items on basket
  showAll(event) {
    document.querySelector('.active').classList.remove('active'); //Remove last active label
    event.target.classList.add('active'); //show target label as active
    const basketItemsElem = document.querySelectorAll('.basket-item');
    basketItemsElem.forEach((item) => {
      item.classList.remove('hide'); //Show all items on basket
    });
  }
  //Show only non-bought items on basket
  showPending(event) {
    document.querySelector('.active').classList.remove('active'); //Remove last active label
    event.target.classList.add('active'); //show target label as active
    const basketItemsElem = document.querySelectorAll('.basket-item');
    //Show all basket-items before hiding
    basketItemsElem.forEach((item) => {
      item.classList.remove('hide');
    });
    //Filter
    basketItemsElem.forEach((item) => {
      if (item.classList.contains('bought')) {
        item.classList.add('hide');
      } else {
        return;
      }
    });
  }
}
