import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './apps/features/users/userSlice';
import UserProfile from './apps/features/users/userProfile';

const App = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUser({ name, email }));
    setName('');
    setEmail('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Enter User Details</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <button type="submit">Save</button>
      </form>
      <UserProfile />

    </>
  );
};

export default App;
