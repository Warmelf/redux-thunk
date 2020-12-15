import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import { fetchPosts } from '../redux/actions';


class PostList extends Component {
    componentDidMount() {
        this.props.dispatch(fetchPosts());
    }
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
 
const mapStateToProps = (state) =>({ posts: state.posts});

export default connect(mapStateToProps)(PostList);