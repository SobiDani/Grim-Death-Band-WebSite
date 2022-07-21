import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../../services/api';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const GalleryEdit = () => {
  const { id } = useParams('id');

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (formData) => {
    API.patch(`images/${id}`, formData).then((res) => {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        icon: 'success',
        title: 'Edited',
      });
      navigate('/gallery');
    });
  };

  const borrar = () => {
    API.delete(`images/${id}`).then((res) => {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        icon: 'success',
        title: 'Deleted',
      });
      navigate('/gallery');
    });
  };

  return (
    <div className='coleccion edit'>
      <h2>Edit image</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='title'>title:</label>
        <input
          type='text'
          id='title'
          {...register('title', { required: true })}
        />
        <label htmlFor='image'>image:</label>
        <input
          type='text'
          id='image'
          {...register('image', { required: true })}
        />

        <button type='submit'>Edit</button>
      </form>
      <button className='delete' onClick={() => borrar()}>
        DELETE
      </button>
    </div>
  );
};

export default GalleryEdit;
