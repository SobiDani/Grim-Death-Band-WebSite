import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navigator2 from '../../components/Navigator2/Navigator2'
import { SWContext } from '../../context/context';
import "./Discography.scss"
import { generatePath } from 'react-router-dom';

const Discography = () => {


  const {albums} = useContext(SWContext);
  const [id, setId] = useState()
  console.log(id);

 albums.sort((a,b) => b.year - a.year);

  return (
    <div>
    <Navigator2/>
    <img className='logoOfi' src="https://res.cloudinary.com/dzivvzwq0/image/upload/v1656260608/GrimDeath/png/GRIM-DEATH-black-png_hjbe9y.png" alt="logoGrimDeath"/>
    <div className='discography'>
      {albums.map((album) => (
        <figure key={album._id}>
        <a href='https://open.spotify.com/artist/3M9oFj9bipIQQTJrKfnOlF?si=kd2rGev0Sh61-yse_mVOug&nd=1'>
          <img src={album.image} alt={album.title}/>
          <p>{album.title}</p>
          <p className='yearAlbum'>{album.year}</p>
          </a>
          {localStorage.getItem("rol") === "admin" && (

        <Link className='botonAdmin' onClick={() => setId(album._id)} to={generatePath("/editalbum/:id", { id: album._id })}>edit</Link>

        )}
        </figure>
        
      ))}
    </div>
    {localStorage.getItem("rol") === "admin" && (
        <div className='divBotonAdmin'>
        <Link className='botonAdmin adminAñadir' to='/newalbum'>Add Album</Link>
        </div>
      )}
    <footer><Footer></Footer></footer>
    </div>
  )
}

export default Discography