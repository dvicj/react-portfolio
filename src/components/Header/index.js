import React from 'react'
import coverImage from '../../assets/cover/cover-image.png';

function Header() {

  return (
    <section>
      <img id="cover-image" src={coverImage} alt='cover'/>
    </section>
  )
}

export default Header; 