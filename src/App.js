import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RequireAuth } from './components/RequireAuth';
import { RequireAdmin } from './components/RequiredAdmin';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Merch from './pages/Merch/Merch';
import Register from './pages/Register/Register';
import Discography from './pages/Discography/Discography';
import Gallery from './pages/Gallery/Gallery';
import GalleryForm from './components/AddForm/GalleryForm';
import MerchForm from './components/AddForm/MerchForm';
import AlbumForm from './components/AddForm/AlbumForm';
import GalleryEdit from "./components/EditForm/GalleryEdit";
import AlbumEdit from './components/EditForm/AlbumEdit';
import MerchEdit from './components/EditForm/MerchEdit';
import { SWContextProvider } from './context/context';
import { useState } from 'react';
import { JwtContext } from "./context/jwtContext";
import React, { useEffect } from 'react';

function App() {
  const [jwt, setJwt] = useState(null);
  useEffect(() => {
    document.title = 'GRIM 🔮 DEATH';
  });

  return (
    <div className='App'>
       <JwtContext.Provider value={{ jwt, setJwt }}>
    <SWContextProvider>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/merch' element={ <RequireAuth><Merch/></RequireAuth>}/>
        <Route path='/discography' element={<Discography/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/newimage' element={<RequireAdmin><GalleryForm/></RequireAdmin>} />
        <Route path='/editimage/:id' element={<RequireAdmin><GalleryEdit/></RequireAdmin>} />
        <Route path='/editmerch/:id' element={<RequireAdmin><MerchEdit/></RequireAdmin>} />
        <Route path='/editalbum/:id' element={<RequireAdmin><AlbumEdit/></RequireAdmin>} />
        <Route path='/newmerch' element={<RequireAdmin><MerchForm/></RequireAdmin>} />
        <Route path='/newalbum' element={<RequireAdmin><AlbumForm/></RequireAdmin>} />
        </Routes>
      </Router>
      </SWContextProvider>
      </JwtContext.Provider>
    </div>
  );
}

export default App;
