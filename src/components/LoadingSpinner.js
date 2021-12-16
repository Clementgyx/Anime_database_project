import React from "react";
import Spinner from "react-bootstrap/Spinner";

function LoadingSpinner() {
  return (
    <div>
      <Spinner className="spinner" animation="border" variant="primary" />
    </div>
  );
}

export default LoadingSpinner;
