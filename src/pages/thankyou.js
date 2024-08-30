import React from 'react';
import { useNavigate } from 'react-router-dom';

function Thankyou() {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/submit');
  };
    return (
      <>
    <h1>Thank You!</h1>
    <button onClick={handleNavigate}>Go to Form</button>
    </>
    );
  }
  
  export default Thankyou;