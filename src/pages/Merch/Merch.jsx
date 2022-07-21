import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Navigator2 from '../../components/Navigator2/Navigator2'
import { SWContext } from '../../context/context'
import "./Merch.scss"
import { generatePath } from 'react-router-dom';

const Merch = () => {

  const {merch} = useContext(SWContext)
  const [id, setId] = useState()
  console.log(id);

  return (
      <div>
      <Navigator2/>
      <img className='logoOfi' src="https://res.cloudinary.com/dzivvzwq0/image/upload/v1656260608/GrimDeath/png/GRIM-DEATH-black-png_hjbe9y.png" alt="logoGrimDeath"/>
<div className='merchpage'>
  {merch.map((clothing) => (
    <figure key={clothing._id}>
    <div className="figure">
      <img src={clothing.image} alt={clothing.name}/>
      <img className='Sirv image-hover' src={clothing.image2} alt={clothing.name}/>
      </div>
      <p className='apaño'>{clothing.name}</p>
      <p className='price'>{clothing.price}</p>
      {localStorage.getItem("rol") === "admin" && (

        <Link className='botonAdmin' onClick={() => setId(clothing._id)} to={generatePath("/editmerch/:id", { id: clothing._id })}>edit</Link>

        )}
    </figure>
  ))}
</div>
      {localStorage.getItem("rol") === "admin" && (
        <div className='divBotonAdmin'>
        <Link className='botonAdmin adminAñadir' to='/newmerch'>Add Image</Link>
        </div>
      )}
 <footer><Footer></Footer></footer>
      </div>
    
  )
}

export default Merch