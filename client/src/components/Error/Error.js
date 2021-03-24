import { Paper } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Paper>
      <section className='error-page section'>
        <div className='error-container'>
          <h1>No page found</h1>
          <Link to='/' className='btn btn-primary'>
            Back home
          </Link>
        </div>
      </section>
    </Paper>
  );
};

export default Error;
