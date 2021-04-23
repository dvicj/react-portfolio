import React from 'react'
import coverImage from '../../assets/cover/cover-image.png';

function Header() {

  return (
    <section>
      <img src={coverImage} style={{width: "100%"}} alt='cover'/>
    </section>
  )
}

export default Header; 