import React from 'react';
import imageContent from './../../../images/sky.jpg';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.profile__img} src={imageContent} />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
                <img src='' />
            </div>
        </div>
    )
}

export default ProfileInfo;