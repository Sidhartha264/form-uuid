import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    // Send POST request to backend
    try {
      const response = await fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        // Clear form fields
        setName('');
        setEmail('');
        // Navigate to the Thank You page
        navigate('/thank-you');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter your Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>Enter your Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Form;
