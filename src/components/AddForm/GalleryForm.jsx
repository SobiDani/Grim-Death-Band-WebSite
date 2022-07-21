import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../../services/api";
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const AlbumForm = () => {

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate()

    const onSubmit = (formData) => {
        API.post("images/", formData).then((res) => {
          const MySwal = withReactContent(Swal);
          MySwal.fire({
            icon: 'success',
            title: 'Added',
          });
          navigate('/gallery');
        });
      };

  return (
    <div className="coleccion edit">
    <h2>Registro de nueva imagen</h2>
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">title:</label>
      <input
        type="text"
        id="title"
        {...register("title", { required: true })}
      />
      <label htmlFor="image">image:</label>
      <input
        type="text"
        id="image"
        {...register("image", { required: true })}
      />

      <button type="submit">Añadir</button>
    </form>
   
    </div>
  )
}

export default AlbumForm