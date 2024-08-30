import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/submit');
  };

  return (
    <>
      <h1>Welcome! Click the button to go to the form!</h1>
      <button onClick={handleNavigate}>Go to Form</button>
    </>
  );
}

export default Welcome;
