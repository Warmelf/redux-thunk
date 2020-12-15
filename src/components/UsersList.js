import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';
import { fetchUsers } from '../redux/actions';


class UsersList extends Component {
    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }
    render() { 
        return (
            <ul className="post-list">
                {this.props.users.map(item => (
                    <li className="post-list__item" key={item.id}><UserItem {...item} /></li>
                ))}
            </ul>
        );
    }
}
 
const mapStateToProps = (state) =>({ users: state.users});

export default connect(mapStateToProps)(UsersList);