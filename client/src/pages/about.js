import React from 'react';
import { Paper } from '@material-ui/core';

const about = () => {
  return (
    <Paper
      style={{
        width: '70%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <div style={{ textAlign: 'center', fontSize: '28px' }}>
        <h1>About</h1>
      </div>
      <div style={{ fontSize: '25px', padding: '10px' }}>
        <span>
          My name is Ivo and this is my project for training purposes. Goal of
          this project is to help me understand what I can do and what I still
          need to work on. All of this is still work in progress so there will
          be a lot of changes through time. For now this project only contain
          basic functions to work. In future plans are to work on CSS, add more
          components and quality of life functions like search bar, split data
          in pages and more
        </span>
      </div>
    </Paper>
  );
};

export default about;
