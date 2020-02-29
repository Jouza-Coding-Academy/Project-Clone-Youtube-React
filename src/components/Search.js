import React from 'react';
import axios from 'axios';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  handleChangeInput = e => {
    this.setState({ term: e.target.value });
  };
  render() {
    const { state, props, handleChangeInput } = this;
    const { term } = state;
    const { getVideos } = props;

    return (
      <div className="search">
        <h1 className="blue">Search</h1>
        <div className="flex-center">
          <input
            type="text"
            className="form-control col-4"
            placeholder="search term"
            value={term}
            onChange={handleChangeInput}
          />
          <button
            className="btn btn-outline-primary"
            type="button"
            id="button-addon2"
            onClick={() => getVideos(term)}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
