import { Component } from 'react';

export class GroceriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main>
        <h2>
          <i class='fas fa-leaf'></i>
          Groceries:
        </h2>
        <ul>
          {/* TODO - replace with component - GroceriesItem*/}
          {this.props.groceriesArr.map((item) => (
            <li key={item} className='grocery-item'>
              {item}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
