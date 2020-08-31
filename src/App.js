import React, { Component } from 'react';
import PostList from './components/PostList';
import './style.css'; 

class App extends Component {
  render() { 
    return (
      <div className="app">
        <h1 className="app__title">Blog posts</h1>
        <PostList />
      </div>
    );
  }
}
 
export default App;