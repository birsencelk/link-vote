import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export const ToastTemplate = (props) => {
  return toast.success(props.message, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    width:'100%'
  });
};