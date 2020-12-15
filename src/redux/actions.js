export function addPosts(posts) {
    return {
        type: 'ADD_POSTS',
        payload: {
            posts: posts
        }
    }
}

export function addUsers(users) {
    return {
        type: 'ADD_USERS',
        payload: {
            users: users
        }
    }
}

export function fetchPosts() {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            dispatch(addPosts(data));
        })
    }
}

export function fetchUsers() {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            dispatch(addUsers(data));
        })
    }
}