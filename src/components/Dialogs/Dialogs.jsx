import React, {createRef} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((dialogObj) =>
        (<DialogItem
            id={dialogObj.id}
            name={dialogObj.name}
            image={dialogObj.image}
        />)
    );

    let messagesElements = props.state.messages.map((messageObj) =>
        (<Message
            id={messageObj.id}
            message={messageObj.message}
        />)
    );

    let newMessageElement = createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(onMessageChangeActionCreator(text));
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
                        ref={newMessageElement}
                        value={props.state.newMessageText}
                    />
                    <button
                        className={s.submitButton}
                        onClick={addMessage}>
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;