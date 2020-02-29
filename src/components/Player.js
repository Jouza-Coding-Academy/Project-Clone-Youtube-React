import React, { Component } from 'react';

export default class Player extends Component {
  render() {
    console.log('Cuurent Video:', this.props.oneVideo);
    // console.log(this.props.oneVideo.snippet.title);
    // console.log(this.props.oneVideo.snippet.description);
    const { snippet, id } = this.props.oneVideo;
    const { title, description } = snippet;
    return (
      <div className="player col-7">
        <h1 className="purple">Player</h1>
        <iframe
          classNam="col-12 px-0"
          id="player"
          type="text/html"
          width="640"
          height="390"
          src={`http://www.youtube.com/embed/${id.videoId}?enablejsapi=1`}
          frameborder="0"
        ></iframe>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
}
