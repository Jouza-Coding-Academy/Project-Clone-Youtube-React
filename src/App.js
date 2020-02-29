import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// import Create from './components/Create';
import Search from './components/Search';
import Player from './components/Player';
import List from './components/List';

const DEFAULT_URL = 'https://www.googleapis.com/youtube/v3';
const ENDPOINT = '/search';
const API_KEY = 'aaaa';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: 'no value' // => {}
    };
  }
  componentDidMount = () => {
    this.getVideos();
  };
  // get data from youtube
  getVideos = (newSearchTerm = '') => {
    // let currentURL=`${DEFAULT_URL}${ENDPOINT}?part=snippet&key=${API_KEY}`
    // if(newSearchTerm){
    //   currentURL= `${DEFAULT_URL}${ENDPOINT}?part=snippet&key=${API_KEY}&q=${newSearchTerm}`
    // }
    axios({
      method: 'GET',
      // url: currentURL
      url: `${DEFAULT_URL}${ENDPOINT}?part=snippet&key=${API_KEY}&q=${newSearchTerm}`
    })
      .then(res => {
        // console.log('RES : ', res);
        // console.log('RES DATA: ', res.data);
        // console.log('ITEMS:', res.data.items);
        const { items } = res.data;
        this.setState({ videos: items, currentVideo: items[0] });
      })
      .catch(err => {
        console.log('ERROR: ', err);
      });
  };
  // change current video
  changeCurrentVideo = newVideo => {
    console.log('you called change current video', newVideo);
    this.setState({ currentVideo: newVideo });
  };
  render() {
    const { state, getVideos, changeCurrentVideo } = this;
    const { videos, currentVideo } = state;
    // console.log('VIDEOS:', videos);

    /*  
    let test
    if (currentVideo === 'no value') {
      test=''
    }else{
      test=<Player oneVideo={currentVideo} />
    }
    */
    return (
      <div className="app container">
        <h1 className="green">App</h1>
        {/* <button onClick={getVideos}>GET VIDEOS</button> */}
        <Search getNewVideos={getVideos} />
        <div className="flex">
          <p></p>
          {/*       false              &&   <Player oneVideo={currentVideo} /> */}
          {/*       true               &&   <Player oneVideo={currentVideo} /> */}
          {currentVideo !== 'no value' && <Player oneVideo={currentVideo} />}
          {/* <Player oneVideo={currentVideo} /> */}
          <List allVideos={videos} changeCurrentVideo={changeCurrentVideo} />
        </div>
      </div>
    );
  }
}
