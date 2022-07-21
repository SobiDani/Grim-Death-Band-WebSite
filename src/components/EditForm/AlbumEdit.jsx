import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../../services/api';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const AlbumEdit = () => {
  const { id } = useParams('id');

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (formData) => {
    API.patch(`albums/${id}`, formData).then((res) => {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        icon: 'success',
        title: 'Edited',
      });
      navigate('/discography');
    });
  };

  const borrar = () => {
    API.delete(`albums/${id}`).then((res) => {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        icon: 'success',
        title: 'Deleted',
      });
      navigate('/discography');
    });
  };

  return (
    <div className='coleccion edit'>
      <h2>Edit album</h2>

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
        <label htmlFor='year'>year:</label>
        <input
          type='number'
          id='year'
          {...register('year', { required: true })}
        />
        <button type='submit'>edit</button>
      </form>
      <button className='delete' onClick={() => borrar()}>
        DELETE
      </button>
    </div>
  );
};

export default AlbumEdit;
