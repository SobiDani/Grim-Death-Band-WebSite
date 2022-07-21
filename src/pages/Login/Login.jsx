import React from 'react'
import LoginForm from '../../components/LoginForm'
import Navigator2 from '../../components/Navigator2/Navigator2'
import "./Login.scss"

const Login = () => {
  return (
    <div>
    <Navigator2/>
    <img className='logoOfi' src="https://res.cloudinary.com/dzivvzwq0/image/upload/v1656260608/GrimDeath/png/GRIM-DEATH-black-png_hjbe9y.png" alt="logoGrimDeath"/>
    <img className='logo3' src="https://res.cloudinary.com/dzivvzwq0/image/upload/v1656260608/GrimDeath/png/GrimDeath_Logo_rdljzl.png" alt="GrimDeath"/>

      <LoginForm></LoginForm>
    </div>
  )
}

export default Login