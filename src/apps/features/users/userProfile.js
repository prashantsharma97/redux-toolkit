import React from 'react';
import { useSelector } from 'react-redux';

const userProfile = () => {
  const { name, email } = useSelector((state) => state.user);

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {name || 'N/A'}</p>
      <p><strong>Email:</strong> {email || 'N/A'}</p>
    </div>
  );
};

export default userProfile;
