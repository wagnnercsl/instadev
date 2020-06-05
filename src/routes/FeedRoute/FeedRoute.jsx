import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';
import { getUsers, getStories } from '../../service/api';
import Story from '../../components/Story';

const FeedRoute = () => {

  const [stories, setStories] = useState([]);

  const [users, setUsers] = useState([]);
  
  const getUserById = (storyUserId) => users.find(user => storyUserId.userId === user.id)
  console.log(stories);
  useEffect(() => {
    getUsers().then(response => {
      setUsers(response)
    })}
  , []);

  useEffect(() => {
    getStories().then(response => {
      setStories(response)
    })}
  , [users]);

  return (
    <div data-testid="feed-route">
      <Stories stories={stories} getUserHandler={getUserById}/>
    </div>
  );
};

export default FeedRoute;
