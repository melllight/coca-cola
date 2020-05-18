import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let reducers = combineReducers({
    //представляем это как данные state.
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer
});

let store = createStore(reducers);

export default store;