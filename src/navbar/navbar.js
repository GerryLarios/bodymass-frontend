import React from 'react';

export default function({ children }) {
  return(
    <nav>
      <div>
        <a href="/" className="brand-logo">Body Mass Index</a>
        <ul className="right hide-on-med-and-down">
          {children}
        </ul>
      </div>
    </nav>
  );
}
