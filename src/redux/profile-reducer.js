const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

//необходим, если в reducer не придет state
let initialState = {
    posts: [
        {id: 1, message: 'Hey! How are you?', likesCount: 12},
        {id: 2, message: 'I\'m fine! And you?', likesCount: 17},
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 7
            }
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ( {type: ADD_POST} )
export const onPostChangeActionCreator = (text) => ( {type: UPDATE_NEW_POST_TEXT, newPostText: text} )

export default profileReducer;