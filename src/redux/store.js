import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
    //private store
    _state: {
        navbar: {
            friends: [
                {id: 1, name: 'Martin', image: 'https://outstyle.org/images/news/2/5/8/8.jpg'},
                {
                    id: 2,
                    name: 'Flume',
                    image: 'https://vignette.wikia.nocookie.net/vgost/images/1/11/Flume.jpg/revision/latest/scale-to-width-down/340?cb=20170810033316'
                },
                {
                    id: 3,
                    name: 'Aydar',
                    image: 'https://sun2.ufanet.userapi.com/_FDMAX13XPI9k8ovV-L39lEwjqnlQY4cCz6WsA/UelpdBkC9j8.jpg'
                },
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
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    //public store
    getState() {

        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    //один общий component method
    //action - объект (не функция), (dispatch с англ. - отправить)
    dispatch(action) {
        //команда выполняется справа налево - значит сначала вызовится функция profileReducer
        //с текущими данными, она выполнится, вернет новый state и присвоит его текущему state,
        //в результате чего state.profilePage обновится
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;

