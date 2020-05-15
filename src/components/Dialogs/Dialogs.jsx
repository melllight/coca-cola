import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((dialogObj) =>
        (<DialogItem id={dialogObj.id} name={dialogObj.name}/>)
    );

    let messagesElements = props.state.messages.map((messageObj) =>
        (<Message id={messageObj.id} message={messageObj.message}/>)
    );

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    )
}

export default Dialogs;