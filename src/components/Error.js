import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css"; // Optional: for custom styling

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <h1>Oops! Something went wrong.</h1>
      <p>We couldn't find the page you're looking for.</p>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default Error;
