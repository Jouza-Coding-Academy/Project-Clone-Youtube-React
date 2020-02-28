import React from 'react';
import Item from './Item';

export default class List extends React.Component {
  render() {
    return (
      <div className="list">
        <h1>List</h1>
        {this.props.posts.map(post => {
          return <Item post={post} />;
        })}
      </div>
    );
  }
}
