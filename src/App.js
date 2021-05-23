import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [categories] = useState([
    {name: 'API', description: 'Application Programming Interface'},
    {name: 'MVC', description: 'Model View Controller'},
    {name: 'OOM', description: 'Object Oriented Mapping'},
    {name: 'PWA', description: 'Progressive Web Application'},
    {name: 'SQL', description: 'Structured Query Language'},
    {name: 'MERN', description: 'MongoDB, Express.js, React.js, Node.js'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header></Header>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
