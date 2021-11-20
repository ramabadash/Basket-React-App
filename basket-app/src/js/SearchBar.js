import { Component } from 'react';
import '../styles/SearchBar.css';

export class SearchBar extends Component {
  render() {
    return (
      <input
        type='text'
        className='search-bar'
        placeholder='Search on basket...'
        onKeyUp={this.filterBasketItems}
      ></input>
    );
  }
  // Serch basket-items on every key press
  filterBasketItems() {
    const searchBar = document.querySelector('.search-bar');
    const searchStr = searchBar.value.toLowerCase();
    const allBasketIremsElem = document.querySelectorAll('.basket-item');
    // Gets a itemElem and a string.
    //If it contains the string it will display the item otherwise it will disappear.
    for (let i = 0; i < allBasketIremsElem.length; i++) {
      const itemElem = allBasketIremsElem[i];
      const itemName = itemElem.getAttribute('name').toLowerCase();
      if (itemName.includes(searchStr)) {
        itemElem.style.display = '';
      } else {
        itemElem.style.display = 'none';
      }
    }
  }
}
