import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem name="Martin Garrix" id='1'/>
                <DialogItem name="Flume" id='2'/>
                <DialogItem name="Aydar Karimov" id='3'/>
                <DialogItem name="Ruslan Mukhametkulov" id='4'/>
                <DialogItem name="Danil Gabdulislamov" id='5'/>
            </div>

            <div className={s.messages}>
                <Message message={"I want to see you BRO on Tommorowland!!!!"} />
                <Message message={"Hey! Look nice BRO!!!"} />
                <Message message={"THANK YOU MAN! Good job!"} />
            </div>

        </div>
    )
}

export default Dialogs;