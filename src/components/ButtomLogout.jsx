import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { JwtContext } from '../context/jwtContext';
import "./logout.scss"

const ButtomLogout = () => {
  const { setJwt } = useContext(JwtContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('rol');

    navigate('/');
    setJwt(null);
  };

  return <button className='logout' onClick={logout}>LOGOUT</button>;
};

export default ButtomLogout;
