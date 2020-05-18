import React, {createRef} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map((dialogObj) =>
        (<DialogItem id={dialogObj.id} name={dialogObj.name} image={dialogObj.image}/>)
    );

    let messagesElements = state.messages.map((messageObj) =>
        (<Message id={messageObj.id} message={messageObj.message}/>)
    );

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    //e (event) - событие (в данном случае событие textarea)
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.store.dispatch(onMessageChangeActionCreator(text));
    }

    return (
        <div className={s.dialogsBlock}>
            <div className={s.dialogsFriendItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesFriendItems}>
                {messagesElements}
                <div className={s.submitMessage}>
                    <textarea
                        onChange={onMessageChange}
                        className={s.submitContent}
                        placeholder="Введите сообщение..."
                        value={state.newMessageText}
                    />
                    <button className={s.submitButton} onClick={addMessage}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;