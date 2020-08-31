import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';

class PostList extends Component {
    render() { 
        return (
            <ul className="post-list">
                {this.props.posts.map(item => (
                    <li className="post-list__item" key={item.id}><PostItem {...item} /></li>
                ))}
            </ul>
        );
    }
}
 
export default connect(state => ({ posts: state.posts }), null)(PostList);