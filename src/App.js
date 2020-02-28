import React from 'react';
import axios from 'axios';
import './App.css';

// import Create from './components/Create';
import Search from './components/Search';
import List from './components/List';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <h1>App</h1>
        <Search/>
        <List/>
      </div>
    );
  }
}
