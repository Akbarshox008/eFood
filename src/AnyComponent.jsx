import React from 'react';
import { toast } from 'react-toastify';

const AnyComponent = () => {
  const notify = () => toast('sucsess!');
  
  return (
    <div>
      <button onClick={notify}>Notify</button>
    </div>
  );
};

export default AnyComponent;