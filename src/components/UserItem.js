import React, { Component } from 'react';

class UserItem extends Component {
    render() { 
        const { name, username } = this.props;

        return (
            <div className="post-item">
                <p className="post-item__title">Name: {name}</p>
                <p className="post-item__body">Username: {username}</p>
            </div>
        );
    }
}
 
export default UserItem;