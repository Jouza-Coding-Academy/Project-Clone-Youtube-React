import React from 'react';
import axios from 'axios';
import './App.css';

// import Create from './components/Create';
import Search from './components/Search';
import Player from './components/Player';
import List from './components/List';

const URL = 'https://www.googleapis.com/youtube/v3';
const ENDPOINT_SEARCH = '/search';
const API_KEY = process.env.REACT_APP_API_KEY;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
  }
  componentDidMount = () => {
    axios({
      method: 'GET',
      url: `${URL}${ENDPOINT_SEARCH}?key=${API_KEY}&part=snippet`
    })
      .then(res => {
        console.log('RESPONSE: ', res);
        console.log('DATA: ', res.data);
        const {items}=res.data
        this.setState({videos:items})
      })
      .catch(err => {
        console.log('ERROR: ', err);
      });
  };
  render() {
    // console.log('ENV: ', process.env);
    const {videos}=this.state
    return (
      <div className="app container">
        <h1 className="green">App</h1>
        <Search />
        <div className="flex ">
          <Player currentVideo={videos[0]}/>
          <List videos={videos}/>
        </div>
      </div>
    );
  }
}
