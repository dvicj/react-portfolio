import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, index  } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img/>
        <p>
          {description}
        </p>
        <button type="button" onClick={onClose}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default Modal;