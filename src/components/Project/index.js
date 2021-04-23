import React, {useState} from 'react';
import Modal from '../Modal';

const Project = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        {
            name: '',
            category: '',
            description: ''
        },

    ])
    
    const currentPhotos = photos.filter((photo) => photo.category === category);

    const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i});
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
          {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
          <div className="flex-row">
            {currentPhotos.map((image, i) => (
              <img
                src={require(`../../assets/small/${category}/${i}.png`).default}
                alt={image.name}
                className=""
                onClick={() => toggleModal(image, i)}
                key={image.name}
              />
            ))}
          </div>
        </div>
    );
};

export default Project; 