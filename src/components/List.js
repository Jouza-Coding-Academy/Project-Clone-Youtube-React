import React from 'react';
import Item from './Item';

export default class List extends React.Component {
  render() {
    return (
      <div className="list col-4">
        <h1 className="red">List</h1>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    );
  }
}
