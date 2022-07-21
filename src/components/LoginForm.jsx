import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { API } from '../services/api';
import { useNavigate } from "react-router-dom";
import "./logout.scss"
import { JwtContext } from '../context/jwtContext';

const LoginForm = () => {
    const {register, handleSubmit} = useForm();
    const { setJwt } = useContext(JwtContext);


    const navigate = useNavigate();
    const onSubmit = (formData) => {
        API.post("users/login", formData).then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.data.token)
          localStorage.setItem("user", res.data.data.user.name)
          localStorage.setItem("rol", res.data.data.user.rol)

          setJwt(localStorage.getItem("token"));

        }) 
        navigate("/")
        ;
             
    }

   

  return (
   <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor='email'> Email:</label>
    <input type="email" id="email"{...register("email", {required: true})}></input>

    <label htmlFor='password'> Password:</label>
    <input type="password" id="password"{...register("password", {required: true})}></input>
    <button  id='buttonlog' type='submit' >Login</button>
   </form>
  )
}

export default LoginForm