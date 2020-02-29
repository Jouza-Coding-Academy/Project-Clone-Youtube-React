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
      videos: [],
      currentVideo: {}
    };
  }
  componentDidMount = () => {
    axios({
      method: 'GET',
      url: `${URL}${ENDPOINT_SEARCH}?key=${API_KEY}&part=snippet`
    })
      .then(res => {
        // console.log('RESPONSE: ', res);
        // console.log('DATA: ', res.data);
        const { items } = res.data;
        this.setState({ videos: items, currentVideo: items[0] });
      })
      .catch(err => {
        console.log('ERROR: ', err);
      });
  };

  changeCurrentVideo = video => {
    this.setState({ currentVideo: video });
  };
  render() {
    const { state, changeCurrentVideo } = this;
    const { videos, currentVideo } = state;
    return (
      <div className="app container">
        <h1 className="green">App</h1>
        <Search />
        <div className="flex ">
          {videos[0] && <Player currentVideo={currentVideo} />}
          <List changeCurrentVideo={changeCurrentVideo} videos={videos} />
        </div>
      </div>
    );
  }
}
