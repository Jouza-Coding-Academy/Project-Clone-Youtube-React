import React from 'react';
import axios from 'axios';

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <div className="create">
        <h1>Create</h1>
      </div>
    );
  }
}
