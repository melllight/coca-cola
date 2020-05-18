let initialState = {
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
}

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default navbarReducer;