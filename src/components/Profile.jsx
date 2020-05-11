import React from 'react';
import imageContent from './../images/BreakingBad.jpg';

const Profile = () => {
    return (
        <div className='profile'>
            <div>
                <img src={imageContent} />
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
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;