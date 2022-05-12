import React from 'react';

const ToDo = () => {
  const submitHandler = () => {
    console.log('girish submitted');
  };

  return (
    <form onSubmit={submitHandler}>
      <input type='text' placeholder='Enter a ToDo' />
    </form>
  );
};

export default ToDo;
