import React from 'react';

const Modal = ({ content, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {content}
      </div>
      <button className="modal-close" onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;
