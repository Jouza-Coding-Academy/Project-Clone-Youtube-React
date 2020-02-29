import React from 'react';

export default class Item extends React.Component {
  render() {
    const { title, thumbnails } = this.props.video.snippet;
    const { url } = thumbnails.medium;
    // console.log(video);
    return (
      <div className="item">
        <h1 className="black">Item</h1>
        <div className="flex-center">
        <img src={url} alt="video img" />
        <p>{title}</p>
        </div>
        
      </div>
    );
  }
}
