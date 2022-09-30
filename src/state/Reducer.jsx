export function postsReducer(state, action) {
    switch (action.type) {
        case 'loadPosts': {
            return {
                ...state,
                posts: action.payload
            }
        }
        case 'showComment': {
            return {
                ...state,
                comment: action.payload
            }
        }
        case 'showEditPost': {
            return {
                ...state,
                showEdit: action.payload
            }
        }

        default:
            throw Error('Unknown action: ' + action.type)
    }
}

export const actions = {
    loadPosts: 'loadPosts',
    showComment: 'showComment',
    showEditPost: 'showEditPost'
}

export const initialPostsState = {
    posts: [],
    comment: false,
    showEdit: false
}