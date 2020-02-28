import React from 'react';
import axios from 'axios';

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }
  getInput = () => {
    console.log(' getInput');
    console.log(this.state);
    axios({
      method: 'post',
      url: 'http://10.51.1.23:5000/posts',
      data: this.state
    })
      .then(res => {
        console.log('RESPONSE: ', res);
        console.log('DATA: ', res.data);
      })
      .catch(err => {
        console.log('ERROR: ', err);
      });
  };
  handleChangeInput_1 = e => {
    this.setState({ title: e.target.value });
  };
  handleChangeInput_2 = e => {
    this.setState({ body: e.target.value });
  };
  render() {
    return (
      <div className="create">
        <h1>CreateNewPost</h1>
        <input
          type="text"
          onChange={event => this.handleChangeInput_1(event)}
        />
        <input
          type="text"
          onChange={event => this.handleChangeInput_2(event)}
        />
        <button onClick={() => this.getInput()}>create new post</button>
      </div>
    );
  }
}
