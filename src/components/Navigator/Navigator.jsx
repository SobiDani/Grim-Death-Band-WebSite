import './Navigator.scss';
import { Link } from 'react-router-dom';
import ButtomLogout2 from '../ButtomLogout2';

const Navigator = () => {


  return (
    <nav>
      <input id='menu-toggle' type='checkbox' />
      <label className='menu-button-container' htmlFor='menu-toggle'>
        <div className='menu-button'></div>
      </label>
      <ul className='ulnav menu'>
        <li className='linav'>
          <Link to='/'>HOME</Link>
        </li>
        <li className='linav'>
          <Link to='/gallery'>GALLERY</Link>
        </li>
        <li>
          <Link to='/merch'>MERCH</Link>
        </li>
        <li>
          <Link to='/discography'>MUSIC</Link>
        </li>
        {localStorage.getItem("token") && (
          <>
            <li>
              <ButtomLogout2></ButtomLogout2>
            </li>
          </>
        )}
        {!localStorage.getItem("token") && (
          <div className='log'>
            <li>
              <Link className='log' to='/login'>
                LOGIN
              </Link>
            </li>
            <li>
              <Link to='/register'>REGISTER</Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navigator;
