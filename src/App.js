// App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const fetchRandomUser = async () => {
    try {
      const randomNumber = Math.floor(Math.random() * 82) + 1;
      const response = await fetch(`https://swapi.dev/api/people/${randomNumber}`);
      const data = await response.json();
      
      setUsers([...users, data]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div className="App">
      <button onClick={fetchRandomUser}>Add Record</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.height}</td>
              <td>{user.mass}</td>
              <td><button onClick={() => deleteUser(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;


