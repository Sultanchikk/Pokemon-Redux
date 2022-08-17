import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <div className="d-flex justify-content-center mt-5" style={{ height: '100vh' }}>
      <CircularProgress sx={{ml: '400px', mt: '100px'}} size={200} />
    </div>
  );
};

export default Loader;
