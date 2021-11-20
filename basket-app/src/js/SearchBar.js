import { Component } from 'react';
import '../styles/SearchBar.css';

export class SearchBar extends Component {
  render() {
    return <input type='text' className='search-bar' placeholder='Search on basket...'></input>;
  }
}
