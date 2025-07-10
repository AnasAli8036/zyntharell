import React from 'react';
import './BusinessPage.css';

function BusinessPage({ title, description }) {
  return (
    <div className="business-page">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href="/" className="back-link">Back to Home</a>
    </div>
  );
}

export default BusinessPage;
