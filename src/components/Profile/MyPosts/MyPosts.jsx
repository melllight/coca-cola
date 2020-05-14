import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea>Текст поста</textarea>
                </div>
                <div className={s.addbutton}>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hey! How are you?'/>
                <Post message="I'm fine! And you?"/>
            </div>
        </div>
    )
}

export default MyPosts;