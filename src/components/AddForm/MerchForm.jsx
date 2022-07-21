import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { API } from '../../services/api';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const MerchForm = () => {

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate()

    const onSubmit = (formData) => {
        API.post("merch/", formData).then((res) => {
          const MySwal = withReactContent(Swal);
          MySwal.fire({
            icon: 'success',
            title: 'Added',
          });
          navigate('/merch');
        });
        
      };


  return (
    <div className="coleccion, edit">
    <h2>Registro de nuevo merch</h2>
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">title:</label>
      <input
        type="text"
        id="name"
        {...register("name", { required: true })}
      />
      
      <label htmlFor="price">price:</label>
      <input
        type="text"
        id="price"
        {...register("price", { required: true })}
      />
      
      <label htmlFor="image">image:</label>
      <input
        type="text"
        id="image"
        {...register("image", { required: true })}
      />
      <label htmlFor="image2">image 2:</label>
      <input
        type="text"
        id="image2"
        {...register("image2", { required: true })}
      />

<label htmlFor="type">type:</label>
      <input
        type="text"
        id="type"
        {...register("type", { required: true })}
      />
      <button type="submit">Añadir</button>
    </form>
   
    </div>
  )
}

export default MerchForm