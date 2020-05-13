import React from 'react';
import imageContent from './../images/BreakingBad.jpg';
import s from './Profile.module.css';

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
            <div>
                My posts
                <div>
                    New posts
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;