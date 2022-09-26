export function reducer(state, action) {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                isloggedIn: true,
                signedUser: action.payload
            }
        case 'logout':
            return {
                ...state,
                isloggedIn: false,
                signedUser: {}
            }
        case 'loadPosts': {
            return {
                ...state,
                postsData: action.payload
            }
        }

        default:
            throw Error('Unknown action: ' + action.type)
    }
}