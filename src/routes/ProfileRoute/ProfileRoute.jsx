import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';
import { getUserProfile, getUserPosts } from '../../service/api';

const ProfileRoute = () => {

  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const { username } = useParams();

  console.log(posts);

  useEffect(() => {
    Promise.all([getUserProfile(username), getUserPosts(username)]).then(response => {
      setUser(response[0]);
      setPosts(response[1]);
    })}
  , [username]);
  
  return (
    <div data-testid="profile-route">
      <UserProfile avatar={user.avatar} name={user.name} username={user.username}/>
      <UserPosts posts={posts} />
    </div>
  );
};

export default ProfileRoute;
