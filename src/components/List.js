import React from 'react';
import Item from './Item';

export default class List extends React.Component {
  render() {
    const { videos, changeCurrentVideo } = this.props;
    return (
      <div className="list col-4">
        <h1 className="red">List</h1>
        {videos.map((video, index) => {
          return (
            <Item
              key={index}
              video={video}
              changeCurrentVideo={changeCurrentVideo}
            />
          );
        })}
      </div>
    );
  }
}
