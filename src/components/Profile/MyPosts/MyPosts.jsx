import React, {createRef} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addTextPost} from "../../../redux/state";

const MyPosts = (props) => {

    let postsElements = props.state.posts.map((post) =>
        (<Post id={post.id} message={post.message} likesCount={post.likesCount} />)
    );

    let newPostElement = createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        placeholder='Введите текст...'
                        value={props.state.newPostText}
                    />
                </div>
                <div className={s.addbutton}>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;