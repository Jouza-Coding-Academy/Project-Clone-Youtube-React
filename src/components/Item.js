import React from 'react';

export default class Item extends React.Component {
  render() {
    return (
      <div className="item">
        {<h1>Item</h1>}
        <p>title: {this.props.post.title}</p>
        <p>body: {this.props.post.body}</p>
      </div>
    );
  }
}
