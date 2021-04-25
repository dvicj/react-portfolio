import React from 'react';
import Project from '../Project';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 className="gall-name" data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p className="gall-name">{currentCategory.description}</p>
      <Project category={currentCategory.name} />
    </section>
  );
}
export default Gallery;