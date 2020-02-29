import React from 'react';
import axios from 'axios';
const SHOW_VIDEO_URL = 'http://www.youtube.com/embed/';
export default class Player extends React.Component {
  render() {
    const { currentVideo } = this.props;
    const { videoId } = currentVideo.id;
    const { title, description } = currentVideo.snippet;
    return (
      <div className="player col-7 ">
        <h1 className="purple">Player</h1>
        <iframe
          id="player"
          type="text/html"
          className="col-12 px-0"
          width="640"
          height="390"
          src={`${SHOW_VIDEO_URL}${videoId}`}
          frameBorder="0"
        ></iframe>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
}
