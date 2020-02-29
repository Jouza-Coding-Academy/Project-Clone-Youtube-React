import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    const { props } = this;
    const { oneVideo, changeCurrentVideo } = props;
    const { title, thumbnails } = oneVideo.snippet;
    const { url } = thumbnails.medium;
    return (
      <div className="item" onClick={()=>changeCurrentVideo(oneVideo)}>
        {/* <h1 className="black">Item</h1> */}
        <div className="flex-center">
          <img src={url} alt="" />
          <p>{title}</p>
        </div>
        {/* <img src={this.props.oneVideo.snippet.thumbnails.medium.url} alt="" /> */}
        {/* <p>{this.props.oneVideo.snippet.title}</p> */}
      </div>
    );
  }
}
