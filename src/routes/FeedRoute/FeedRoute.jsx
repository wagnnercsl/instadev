import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';
import { getUsers, getStories, getUserProfile, getUserPosts } from '../../service/api';
import Story from '../../components/Story';

const FeedRoute = () => {

  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  console.log(posts);
  
  const getUserById = (storyUserId) => users.find(user => storyUserId === user.id);

  useEffect(() => {
    getUsers().then(response => {
      setUsers(response)
    })}
  , []);

  useEffect(() => {
    getStories().then(response => {
      setStories(response)
    })}
  , []);

  return (
    <div data-testid="feed-route">
      <Stories stories={stories} getUserHandler={getUserById}/>
      <Posts posts={posts} getUserHandler={getUserById}/>
    </div>
  );
};

export default FeedRoute;
