import React from 'react';
import axios from 'axios';
import './App.css';

// import Create from './components/Create';
import Search from './components/Search';
import Player from './components/Player';
import List from './components/List';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos:[]
    };
  }

  render() {
    return (
      <div className="app container">
        <h1 className="green">App</h1>
        <Search/>
        <div className="flex ">
        <Player/>
        <List/>
        </div>
      

     
      </div>
    );
  }
}
