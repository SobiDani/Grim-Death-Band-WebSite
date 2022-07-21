import './Navigator.scss';
import { Link } from 'react-router-dom';
import ButtomLogout from '../ButtomLogout';


const Navigator2 = () => {


  return (
    <nav>
      <input id='menu-toggle' type='checkbox' />
      <label className='menu-button-container' htmlFor='menu-toggle'>
        <div className='menu-button'></div>
      </label>
      <ul className='ulnav menu'>
        <li>
          <Link className='home' to='/'>
            HOME
          </Link>
        </li>
        <li>
          <Link className='gallery' to='/gallery'>
            GALLERY
          </Link>
        </li>
        <li>
          <Link className='merch' to='/merch'>
            MERCH
          </Link>
        </li>
        <li>
          <Link className='music' to='/discography'>
            MUSIC
          </Link>
        </li>
        {localStorage.getItem("token") && (
          <li>
            <ButtomLogout className='logout'></ButtomLogout>
          </li>
        )}
        
        {!localStorage.getItem("token") && (
          <div className='log'>
            <li>
              <Link className='log login' to='/login'>
                LOGIN
              </Link>
            </li>
            <li>
              <Link className='register' to='/register'>
                REGISTER
              </Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navigator2;
