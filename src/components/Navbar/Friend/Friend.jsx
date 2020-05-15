import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={s.itemFriends}>
            <div>
                <img className={s.imageFriend} src={props.image}/>
            </div>
            <div className={s.nameFriend}>
                {props.name}
            </div>
        </div>
    )
}

export default Friend;