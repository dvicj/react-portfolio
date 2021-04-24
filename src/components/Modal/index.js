import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, index, url, github  } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img src={require(`../../assets/small/${category}/${index}.png`).default} alt="current category" />
        <p className="modalDesc">
          {description}
        </p>
        <a href={url} className="modal-link">Application</a>
        <a href={github} className="modal-link">Github Repo</a>
        <button type="button" onClick={onClose}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default Modal;