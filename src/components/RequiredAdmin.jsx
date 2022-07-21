import React from 'react'
import { Navigate, useLocation } from "react-router-dom";
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

export const RequireAdmin = ({ children }) => {
  let location = useLocation();

  if (localStorage.getItem("rol") !== "admin") {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      icon: 'error',
      title: 'you need to be administrator',
    });
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};