import React, { useContext, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navigator2 from '../../components/Navigator2/Navigator2';
import { SWContext } from '../../context/context';
import { Link } from 'react-router-dom';
import "./Gallery.scss"
import { generatePath } from 'react-router-dom';

const Gallery = () => {

  const {pictures} = useContext(SWContext)
  const [id, setId] = useState()
  console.log(id);



  
  return (
    <div>
      <Navigator2 />
      <img className='logoOfi' src="https://res.cloudinary.com/dzivvzwq0/image/upload/v1656260608/GrimDeath/png/GRIM-DEATH-black-png_hjbe9y.png" alt="logoGrimDeath"/>
      <img className='main' src="https://res.cloudinary.com/dzivvzwq0/image/upload/v1656280951/GrimDeath/images/LRM_EXPORT_20220607_204551_doiohe.jpg" alt='grimDeathPicture' />
      <div className='galleryP'>
      {pictures.map((image) => (
        <figure key={image._id}>
          <img src={image.image} alt='grimDeathPicture' />
          {localStorage.getItem("rol") === "admin" && (

        <Link className='botonAdmin' onClick={() => setId(image._id)} to={generatePath("/editimage/:id", { id: image._id })}>edit</Link>

        )}
        </figure>
      ))}
      </div>
      {localStorage.getItem("rol") === "admin" && (
        <div className='divBotonAdmin'>
        <Link className='botonAdmin' to='/newimage'>Add Image</Link>
        </div>
      )}
      <footer><Footer></Footer></footer>
    </div>
  );
};

export default Gallery;
