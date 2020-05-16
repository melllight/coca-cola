import {rerenderEntireTree} from "../render";

let state = {

    navbar: {
        friends: [
            {id: 1, name: 'Martin', image: 'https://outstyle.org/images/news/2/5/8/8.jpg'},
            {id: 2, name: 'Flume', image: 'https://vignette.wikia.nocookie.net/vgost/images/1/11/Flume.jpg/revision/latest/scale-to-width-down/340?cb=20170810033316'},
            {id: 3, name: 'Aydar', image: 'https://sun2.ufanet.userapi.com/_FDMAX13XPI9k8ovV-L39lEwjqnlQY4cCz6WsA/UelpdBkC9j8.jpg'},
        ],
    },

    profilePage: {
        posts: [
            {id: 1, message: 'Hey! How are you?', likesCount: 12},
            {id: 2, message: 'I\'m fine! And you?', likesCount: 17},
        ],
        newPostText: ''
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Martin Garrix', image: 'https://outstyle.org/images/news/2/5/8/8.jpg'},
            {id: 2, name: 'Flume', image: 'https://vignette.wikia.nocookie.net/vgost/images/1/11/Flume.jpg/revision/latest/scale-to-width-down/340?cb=20170810033316'},
            {id: 3, name: 'Aydar Karimov', image: 'https://sun2.ufanet.userapi.com/_FDMAX13XPI9k8ovV-L39lEwjqnlQY4cCz6WsA/UelpdBkC9j8.jpg'},
            {id: 4, name: 'Ruslan Mukhametkulov', image: 'https://cdn.vox-cdn.com/thumbor/y2oC-tOOlvME-8qKp5PRCp2fd-4=/0x0:3072x2048/1400x1400/filters:focal(0x0:3072x2048):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/48869445/IMG_4218.0.0.JPG'},
            {id: 5, name: 'Danil Gabdulislamov', image: 'https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg'},
        ],

        messages: [
            {id: 1, message: 'I want to see you BRO on Tommorowland!!!!'},
            {id: 2, message: 'Hey! Look nice BRO!!!'},
            {id: 3, message: 'THANK YOU MAN! Good job!'},
        ],

        newMessageText: ''
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 7
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}

export let updateNewPostText = (newPostText) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = "";
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newMessageText) => {
    state.dialogsPage.newMessageText = newMessageText;
    rerenderEntireTree(state);
}

export default state;
