import React from 'react';

import Post from '../../components/Post';

import './UserPosts.scss';

const UserPosts = ({ posts }) => (
  <div className="container" data-testid="user-posts">
    <div className="user-posts">
      {posts.map(post => {
        return(
        <div className="post" key={post.id}>
          <figure className="post__figure">
            <img src={post.imageUrl} alt=""/>
          </figure>
        </div>
        )
      })}
    </div>
  </div>
);

export default UserPosts;
