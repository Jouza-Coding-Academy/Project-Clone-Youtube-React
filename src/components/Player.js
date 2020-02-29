import React from 'react';
import axios from 'axios';
const SHOW_VIDEO_URL="http://www.youtube.com/embed/"
export default class Player extends React.Component {
  render() {
    const { currentVideo } = this.props;
    const { videoId } = currentVideo.id;
    const { title, description } = currentVideo.snippet;

    // const {  } = this.props.video;
    console.log(currentVideo, description);
    return (
      <div className="player col-7 ">
        <h1 className="purple">Player</h1>
        {/* <video className="col-12 px-0" controls>
          <source src={''} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <iframe
          id="player"
          type="text/html"
          className="col-12 px-0"
          width="640"
          height="390"
          src={`${SHOW_VIDEO_URL}${videoId}`}
          frameborder="0"
        ></iframe>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
}
