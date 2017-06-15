import React, {Component } from 'react';
class SearchedList extends Component {
  render () {
    return (
      <li className="searchedlistclass"><button>{this.props.searchedname}</button></li>
    )
  }
}
export default SearchedList;