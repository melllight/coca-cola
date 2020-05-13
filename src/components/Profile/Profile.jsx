import React from 'react';
import imageContent from './../../images/BreakingBad.jpg';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img className={s.profile__img} src={imageContent} />
            </div>
            <div>
                ava + description
                <img src='' />
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;