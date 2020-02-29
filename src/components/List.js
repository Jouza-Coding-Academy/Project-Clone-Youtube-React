import React,{ Component } from 'react';
import Item from './Item';

export default class List extends Component {
  render() {
    const {props} = this;
    const {allVideos,changeCurrentVideo} = props;
    return (
      <div className="list col-4">
        <h1 className="red">List</h1>
        {allVideos.map((video,i) => {
          return  <Item key={i} oneVideo={video} changeCurrentVideo={changeCurrentVideo}/>
        })}
       
      </div>
    );
  }
}
