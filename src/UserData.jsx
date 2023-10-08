import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pets-backend-nlog.onrender.com/users');
        console.log('API Response:', response.data);
        if (Array.isArray(response.data.users)) {
          setUsers(response.data.users);
        } else {
          console.error('API response users property is not an array');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-data">
      <h2>User Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong style={{ color: 'blue' }}>Username:</strong> 
              <span style={{ color: 'green' }}>{user.username}</span>, 
              <strong style={{ color: 'blue' }}>Email:</strong> 
              <span style={{ color: 'green' }}>{user.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserData;
