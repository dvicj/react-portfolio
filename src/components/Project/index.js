import React, {useState} from 'react';
import Modal from '../Modal';

const Project = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        {
            name: 'Weather Dashboard',
            category: 'API',
            description: 'An application to display weather based on location. Uses the AccuWeather API.'
        },
        {
          name: 'Poke Parte',
          category: 'API',
          description: 'An application to display Pokemon based on weather. Uses the Pokemon API.'
        },
        {
          name: 'Tech Blog',
          category: 'MVC',
          description: 'An application to post articles and comments. Uses an application design model comprised of three interconnected parts (Model-View-Controller).'
        },
        {
          name: 'Social Network API',
          category: 'NoSQL',
          description: 'Add friends, post thoughts and reactions. Uses MongoDB and mongoose.'
        },
        {
          name: 'Team Profile Generator',
          category: 'OOM',
          description: 'An application that uses the inquirer npm package to create a workplace team. Uses Object Oriented Mapping.'
        },
        {
          name: 'E-commerce Back End',
          category: 'ORM',
          description: 'A database of products, organized in categories with specific product tags. Uses Object Relational Mapping.'
        },
        {
          name: 'Budget Tracker',
          category: 'PWA',
          description: 'A Progressive Web Application for a budget tracker. Add and subtract funds while offline, and download the app to your desktop.'
        },
        {
          name: 'Employee Tracker',
          category: 'SQL',
          descript: 'A Node.js application to add employees to a database. Uses the inquirer and sqlite npm packages.'
        },
        {
          name: 'mnmlize',
          category: 'SQL',
          description: 'An application to add and delete items from your personal inventory. Uses MySQL and Handlebars.js.'
        }
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