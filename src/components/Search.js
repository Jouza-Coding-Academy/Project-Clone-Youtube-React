import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  handleInputChange = event => {
    this.setState({ term: event.target.value });
  };

  render() {
    const { state, props, handleInputChange } = this;
    const { term } = state;
    const { getNewVideos } = props;

    return (
      <div className="search">
        <h1 className="blue">Search</h1>
        <div class="flex-center">
          <input
            value={term}
            onChange={handleInputChange}
            type="text"
            class="form-control col-6"
            placeholder="term to get videos about it"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-primary"
              type="button"
              onClick={()=>getNewVideos(term)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}
