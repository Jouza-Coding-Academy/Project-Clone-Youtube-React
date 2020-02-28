import React from 'react';
import axios from 'axios';
import './App.css';

import Create from './components/Create';
import Search from './components/Search';
import List from './components/List';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('1 constructor');
    this.state = {
      name: 'jouza',
      posts: [{ title: 'asd' }],
      tasks: ['eat fried chicken', 'review react', 'sleep']
    };
  }
  //  map => dom => react => jsx => event =>
  componentDidMount() {
    // call api
    console.log('4 componentDidMount');
    this.getAllPosts();
  }
  getAllPosts = () => {
    console.log('getAllPosts');
    axios({
      method: 'get',
      url: 'http://10.51.1.23:5000/posts'
    })
      .then(res => {
        console.log('RESPONSE: ', res);
        console.log('DATA: ', res.data);
        this.setState({ posts: res.data });
      })
      .catch(err => {
        console.log('ERROR: ', err);
      });
  };

  render() {
    console.log('3 render');
    console.log(this);
    const array = this.state.tasks.map((task, index) => {
      return <p>{task}</p>;
    });
    console.log(array);
    return (
      <div className="app">
        <h1>App</h1>
        {array}
        <button onClick={() => this.getAllPosts()}>get posts</button>
        <Search />
        <Create />
        <List posts={this.state.posts} />
      </div>
    );
  }
}
