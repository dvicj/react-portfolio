import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faSpotify} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Footer() {

  return (
    <section className="foot-sec">
      <FontAwesomeIcon icon={faGithub}/>
      <FontAwesomeIcon icon={faInstagram}/>
      <FontAwesomeIcon icon={faLinkedin}/>
      <FontAwesomeIcon icon={faSpotify}/>
      <FontAwesomeIcon icon={faEnvelope}/>
    </section>
  )
}

export default Footer; 