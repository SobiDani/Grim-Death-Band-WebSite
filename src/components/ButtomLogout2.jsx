import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { JwtContext } from '../context/jwtContext';
import "./logout.scss"

const ButtomLogout2 = () => {
  const navigate = useNavigate();
  const { setJwt } = useContext(JwtContext);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('rol');

    navigate('/');
    setJwt(null);
  };

  return <button id='logout2' onClick={logout}>LOGOUT</button>;
};

export default ButtomLogout2;
