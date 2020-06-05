import React from 'react';

import './UserProfile.scss';
import User from '../../components/User';

const UserProfile = ({ avatar, name, username }) => {

  console.log(avatar, name, username);
  
  return (
    <section className="profile" data-testid="user-profile">
      <div className="container">
        <div className="profile-data">
          <div className="user">
            <div className="user__thumb">
              <img src={avatar} alt={name}/>
            </div>
            <p className="user__name">
              {name}
              <span>@{username}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default UserProfile;
