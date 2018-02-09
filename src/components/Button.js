import React from 'react';

export default function Button(props) {
  return (
    <button
      onClick={props.clickFunction}
      className={`button ${props.newClasses}`}
    >
      {props.text}
    </button>
  );
}
