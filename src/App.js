import React, { Component } from 'react';
import PostList from './components/PostList';
import UsersList from './components/UsersList';
import './style.css'; 

class App extends Component {
  render() { 
    return (
      <div className="app">
        <h1 className="app__title">Blog posts</h1>
        <PostList />
        <UsersList />
      </div>
    );
  }
}
 
export default App;