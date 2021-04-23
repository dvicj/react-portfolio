import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <nav>
        <ul className="flex-row">
          <li className="mx-2 nav-but">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              ABOUT
            </a>
          </li>
          <li className={`mx-2 nav-but ${contactSelected && 'navActive'}`}>
            <a onClick={() => setContactSelected(true)}>CONTACT</a>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 nav-but ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <a
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;