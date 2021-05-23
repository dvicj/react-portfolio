import React, {useState} from 'react';
import Modal from '../Modal';

const Project = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        {
            name: 'Weather Dashboard',
            category: 'API',
            description: 'An application to display weather based on location. Uses the AccuWeather API.',
            url: 'https://dvicj.github.io/Weather-Dashboard/',
            github: 'https://github.com/dvicj/Weather-Dashboard'
        },
        {
          name: 'Poke Parte',
          category: 'API',
          description: 'An application to display Pokemon based on weather. Uses the Pokemon API.',
          url: 'https://damn-ma-6.github.io/Poke-Parte/',
          github: 'https://github.com/damn-ma-6/Poke-Parte'
        },
        {
          name: 'Tech Blog',
          category: 'MVC',
          description: 'An application to post articles and comments. Uses an application design model comprised of three interconnected parts (Model-View-Controller).',
          url: 'https://enigmatic-fortress-14206.herokuapp.com/',
          github: 'https://github.com/dvicj/Tech-Blog'
        },
        {
          name: 'Social Network API',
          category: 'NoSQL',
          description: 'Add friends, post thoughts and reactions. Uses MongoDB and mongoose.',
          url: 'https://drive.google.com/file/d/1TaqXYkgPsmVZRMmKomO7F3OCopcsGUU-/view',
          github: 'https://github.com/dvicj/Social-Network-API'
        },
        {
          name: 'Team Profile Generator',
          category: 'OOM',
          description: 'An application that uses the inquirer npm package to create a workplace team. Uses Object Oriented Mapping.',
          url: 'https://drive.google.com/file/d/1xO0TgGrJcFqg5AieAtKAZvP3pi62n_ah/view',
          github: 'https://github.com/dvicj/Team-Profile-Generator'
        },
        {
          name: 'Budget Tracker',
          category: 'PWA',
          description: 'A Progressive Web Application for a budget tracker. Add and subtract funds while offline, and download the app to your desktop.',
          url: 'https://stark-garden-15853.herokuapp.com/',
          github: 'https://drive.google.com/file/d/1Ouo594L4fp3JZsVYB7RvyZ0_xultI-GG/view'
        },
        {
          name: 'Employee Tracker',
          category: 'SQL',
          description: 'A Node.js application to add employees to a database. Uses the inquirer and sqlite npm packages.',
          url: 'https://drive.google.com/file/d/1NySVZCfwThwg64IAbMGYlMVyQwkuU-Nn/view',
          github: 'https://github.com/dvicj/Employee-Tracker'
        },
        {
          name: 'mnmlize',
          category: 'SQL',
          description: 'An application to add and delete items from your personal inventory. Uses MySQL and Handlebars.js.',
          url: 'https://mnmlize.herokuapp.com/',
          github: 'https://github.com/P-I-M/Personal-Inventory-Management-'
        },
        {
          name: 'currenseed',
          category: 'MERN',
          description: "An online farmer's market. Buy and sell products and earn seeds!",
          url: 'https://currenseed.herokuapp.com',
          github: 'https://github.com/DJ-KARMA/currenseed/tree/main'
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
                className="img-thumbnail mx-1"
                onClick={() => toggleModal(image, i)}
                key={image.name}
              />
            ))}
          </div>
        </div>
    );
};

export default Project; 