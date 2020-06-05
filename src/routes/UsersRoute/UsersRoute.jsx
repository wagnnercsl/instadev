import React, { useState, useEffect } from 'react';

import UsersList from '../../containers/UsersList/UsersList';
import { getUsers } from '../../service/api';

const UsersRoute = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(response => {
      setUsers(response)
    })}
  , []);

  return (
    <div className="container" data-testid="users-route">
        <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;
