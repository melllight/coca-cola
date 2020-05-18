const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Martin Garrix', image: 'https://outstyle.org/images/news/2/5/8/8.jpg'},
        {
            id: 2,
            name: 'Flume',
            image: 'https://vignette.wikia.nocookie.net/vgost/images/1/11/Flume.jpg/revision/latest/scale-to-width-down/340?cb=20170810033316'
        },
        {
            id: 3,
            name: 'Aydar Karimov',
            image: 'https://sun2.ufanet.userapi.com/_FDMAX13XPI9k8ovV-L39lEwjqnlQY4cCz6WsA/UelpdBkC9j8.jpg'
        },
        {
            id: 4,
            name: 'Ruslan Mukhametkulov',
            image: 'https://cdn.vox-cdn.com/thumbor/y2oC-tOOlvME-8qKp5PRCp2fd-4=/0x0:3072x2048/1400x1400/filters:focal(0x0:3072x2048):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/48869445/IMG_4218.0.0.JPG'
        },
        {
            id: 5,
            name: 'Danil Gabdulislamov',
            image: 'https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg'
        },
    ],

    messages: [
        {id: 1, message: 'I want to see you BRO on Tommorowland!!!!'},
        {id: 2, message: 'Hey! Look nice BRO!!!'},
        {id: 3, message: 'THANK YOU MAN! Good job!'},
    ],

    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ( {type: ADD_MESSAGE} )
export const onMessageChangeActionCreator = (text) => ( {type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text} )

/* export const onMessageChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text
    }
} */

export default dialogsReducer;