import React from 'react';

export default function({ text, openModal, target }) {
  return(
    <li>
      <a className="waves-effect waves-light btn" href="#modal" onClick={openModal}> 
        {text}
      </a>
    </li>
  );
}
