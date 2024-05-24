import React from 'react';
import { useAuth } from '../features/auth/AuthContext';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();

  const getEmailName = (email) => {
    const atIndex = email.indexOf('@');
    return email.substring(0, atIndex);
  };

  return (
    <div className="flex items-center">
      {user ? (
        <>
          <p className="mr-2">{getEmailName(user.email)}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">haroon</Link>
      )}
    </div>
  );
};

export default Profile;
