import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://7lafa.com/musicians/martin_garrix.jpg' />
            {props.message}
            <div>
                <span>like </span>{props.likesCount}
            </div>
        </div>
    )
}

export default Post;