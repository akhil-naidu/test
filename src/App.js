import React from 'react';

const ToDo = () => {
  const submitHandler = () => {
    console.log('Girish is using Github');
  };

  return (
    <form onSubmit={submitHandler}>
      <input type='text' placeholder='Enter a ToDo' />
    </form>
  );
};

export default ToDo;
