import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/userService';

const Team = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div className="team">
      <h2>Team</h2>
      <div className="users-list">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;