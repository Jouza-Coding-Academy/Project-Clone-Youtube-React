import React from 'react';
import axios from 'axios';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }
  render() {
    return (
      <div className="search">
        <h1 className="blue">Search</h1>
      </div>
    );
  }
}
