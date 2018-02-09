import React from 'react';

export default function Modal(props) {
  return (
    <div className={`modal ${props.newClasses}`}>
      <div className="modal-background" />
      <div className="modal-content">{props.children}</div>
      <button
        onClick={props.clickFunction}
        className="modal-close is-large"
        aria-label="close"
      />
    </div>
  );
}
