import React from 'react';

export default function ({ message, type }) {
  return(
    <div className="alert">
      <span className={type}>{message}</span>
    </div>
  );
}
