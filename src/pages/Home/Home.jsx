import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navigator from '../../components/Navigator/Navigator';
import "./Home.scss"

const Home = () => {
  return (
    <>
     <Navigator />
     <div className='homehome'>
      <img className='logo1' src="https://res.cloudinary.com/dzivvzwq0/image/upload/v1656258415/GrimDeath/png/GRIM_DEATH_csvbv0.png" alt="logoGrimDeath"></img>

    
      <img className='down' src='https://asadoravelino.com/wp-content/uploads/2020/11/gif-bajar.gif' alt='dobleArrowDown'/>


      <p>Grim Death is a music band from Madrid founded in 2019 that mixes electronic sounds with elements of trap and extreme metal. The lyrics cover topics such as heartbreak, betrayal, drug abuse and criticism of a decadent, superficial and consumerist society.</p>

      <iframe title='YTGrimDeath' width="1000" height="600"
src="https://www.youtube.com/embed/coopBWarMU8?autoplay=1&mute=1&loop=1">
</iframe>

 <footer><Footer></Footer></footer>
     </div>
    
    </>
  );
};

export default Home;
