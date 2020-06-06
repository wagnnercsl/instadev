import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => (
  <div className="container" data-testid="posts">
    <section className="feed">
      {
        posts.map((post, index) => {
          console.log(post);
          return <Post key={post.id} />
        })
      }
    </section>
  </div>
);

export default Posts;
