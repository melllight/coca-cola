import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialogOnlyItem}>
            <NavLink to={path} activeClassName={s.activeDialogItem} >
                <div className={s.twoElements}>
                    <div>
                        <img className={s.dialogImage} src={props.image}/>
                    </div>
                    <div className={s.nameFriend}>
                        {props.name}
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;