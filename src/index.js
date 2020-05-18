import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    state={state}
                    store={store}
                    dispatch={store.dispatch.bind(store)}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

//до этого в subscribe мы вызывали "rerenderEntireTree", но т.к. redux не возвращает
//данные как в нашем хранилище "this._callSubscriber(this._state)"
//то мы объявляем стрелочную функцию, в которой специально запрашиваем актуальные
//данные у store, которые затем отдаем функции "rerenderEntireTree", которая
//принимает эти данные и обновляется
store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
});

//либо <App state={store.getState()} /> и
//store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
