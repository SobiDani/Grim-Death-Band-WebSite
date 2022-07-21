import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import { API } from '../services/api';


const RegisterForm = () => {
    const {register, handleSubmit} = useForm();

    const navigate = useNavigate();
    const onSubmit = (formData) => {
      API.post("users/register", formData).then((res) => {
        navigate('/login');
      })
    }

  return (
   <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor='email'>Email:</label>
    <input type="email" id="email" {...register('email', {required: true})}></input>

    <label htmlFor='name'>Username:</label>
    <input type="text" id="name" {...register('name', {required: true})}></input>

    <label htmlFor='password'>Password:</label>
    <input type="password" id="password" placeholder='min 6 characters' {...register('password', { minLength: 6 },{required: true})}></input>

    <button id='buttonlog' type="submit"> Register</button>

   </form>
  )
}

export default RegisterForm