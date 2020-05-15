import s from "./Message.module.css";
import React from "react";

const Message = (props) => {
    return (
        <div className={s.messageOnlyItem}>
            <div className={s.messageImage}>
                <img src='https://i.redd.it/jkoukv52axx31.png'/>
            </div>
            <div>
                <div className={s.messageName}>
                    Message Boy
                </div>
                <div className={s.messageContent}>
                    {props.message}
                </div>
            </div>
        </div>
    )
}

export default Message;