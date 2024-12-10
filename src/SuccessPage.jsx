import React from 'react';
import { Link } from 'react-router-dom';

function SuccessPage() {
  return (
    <div className="container text-center mt-5">
      <div className="bg-success text-white rounded p-5 shadow-lg">
        <h2 className="fw-bold mb-4">Form Submitted Successfully!</h2>
        <p className="lead mb-4">Your registration was successful. Thank you for submitting your information.</p>
        
       

        <p className="fs-4 mb-4">We look forward to connecting with you soon!</p>

        <div>
          
          <Link to="/" className="btn btn-primary btn-lg mx-2">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
