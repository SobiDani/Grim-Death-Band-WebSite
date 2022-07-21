import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SWContext = createContext();

const BASEURL = 'http://localhost:8666';
export const SWContextProvider = ({children}) => {

    const [albums, setAlbums] = useState([])
    const [merch, setMerch] = useState([])
    const [pictures, setPictures] = useState([])

    useEffect(() => {
        const getPictures = async () => {
          const res = await axios.get(`${BASEURL}/images`);
          setPictures(res.data.images);
        };
        getPictures()
      },[]);

      useEffect(() => {
        const getMerch = async () => {
          const res = await axios.get(`${BASEURL}/merch`);
          setMerch(res.data.merch);
        };
        getMerch()
      },[]);

      useEffect(() => {
        const getAlbums = async () => {
          const res = await axios.get(`${BASEURL}/albums`);
          setAlbums(res.data.album);
        };
        getAlbums()
      },[]);

      return (
        <SWContext.Provider value={{pictures, merch, albums }}>
            {children}
        </SWContext.Provider>
        
      )
}

