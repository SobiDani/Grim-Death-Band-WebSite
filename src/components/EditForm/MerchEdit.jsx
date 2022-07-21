import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../../services/api';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const MerchEdit = () => {
  const { id } = useParams('id');

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (formData) => {
    API.patch(`merch/${id}`, formData).then((res) => {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        icon: 'success',
        title: 'Edited',
      });
      navigate('/Merch');
    });
  };

  const borrar = () => {
    API.delete(`merch/${id}`).then((res) => {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        icon: 'success',
        title: 'Deleted',
      });
      navigate('/Merch');
    });
  };

  return (
    <div className='coleccion edit'>
      <h2>Edit merch</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='name'>title:</label>
        <input
          type='text'
          id='name'
          {...register('name', { required: true })}
        />

        <label htmlFor='price'>price:</label>
        <input
          type='text'
          id='price'
          {...register('price', { required: true })}
        />

        <label htmlFor='image'>image:</label>
        <input
          type='text'
          id='image'
          {...register('image', { required: true })}
        />
        <label htmlFor='image2'>image 2:</label>
        <input
          type='text'
          id='image2'
          {...register('image2', { required: true })}
        />

        <label htmlFor='type'>type:</label>
        <input
          type='text'
          id='type'
          {...register('type', { required: true })}
        />
        <button type='submit'>Edit</button>
      </form>
      <button className='delete' onClick={() => borrar()}>
        DELETE
      </button>
    </div>
  );
};

export default MerchEdit;
