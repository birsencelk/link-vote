/* eslint-disable react/prop-types */
import React from 'react';

// Pages
import SubmitLink from '../common/pages/SubmitLink';
import AddLink from '../common/pages/AddLink';

export default [
  {
    path: '/',
    exact: true,
    // eslint-disable-next-line react/display-name
    render: props => <SubmitLink { ...props } />
  },
  {
    path: '/add-link',
    exact: true,
    // eslint-disable-next-line react/display-name
    render: props => <AddLink { ...props } />
  }
];
