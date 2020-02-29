import React from 'react';
import axios from 'axios';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }
  render() {
    return (
      <div className="player col-7 ">
        <h1 className="purple">Player</h1>
        <h1 className="purple">Player</h1>
        <h1 className="purple">Player</h1>
        <h1 className="purple">Player</h1>
        <h1 className="purple">Player</h1>
        <h1 className="purple">Player</h1>
        <h1 className="purple">Player</h1>
        <h1 className="purple">Player</h1>
        <h1 className="purple">Player</h1>
        <h1 className="purple">Player</h1>
        <h1 className="purple">Player</h1>
        <h1 className="purple">Player</h1>
      </div>
    );
  }
}
