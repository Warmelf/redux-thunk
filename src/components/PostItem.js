import React, { Component } from 'react';

class PostItem extends Component {
    render() { 
        const { title, body } = this.props;

        return (
            <div className="post-item">
                <h2 className="post-item__title">{title}</h2>
                <p className="post-item__body">{body}</p>
            </div>
        );
    }
}
 
export default PostItem;