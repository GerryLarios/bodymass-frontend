import React from 'react';

export default function({ children }) {
  return(
    <div className="row">
      <form className="col s12">
        <div className="row">
          {children}
        </div>
      </form>
    </div>
  );
}
