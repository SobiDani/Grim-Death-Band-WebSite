import React from 'react'
import Navigator2 from '../../components/Navigator2/Navigator2'
import RegisterForm from '../../components/RegisterForm'
import "./Register.scss"

const Register = () => {
  return (
    <div>
    <Navigator2/>
    <img className='logoOfi' src="https://res.cloudinary.com/dzivvzwq0/image/upload/v1656260608/GrimDeath/png/GRIM-DEATH-black-png_hjbe9y.png" alt="logoGrimDeath"/>
    <img className='photoHead' src="https://res.cloudinary.com/dzivvzwq0/image/upload/v1656280969/GrimDeath/images/trio22_lrvrvy.jpg" alt="GrimDeathTrio"/>
      <h2 className='registerh2'>Register</h2>
      <RegisterForm/>
    </div>
  )
}

export default Register