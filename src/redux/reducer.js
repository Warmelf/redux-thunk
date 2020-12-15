const initialState = {
    posts: [],
    users: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_POSTS':
            return {
                ...state,
                posts: action.payload.posts
            }
        case 'ADD_USERS':
            return {
                ...state,
                users: action.payload.users
            }
        default:
            return state;
    }
}

export default reducer;