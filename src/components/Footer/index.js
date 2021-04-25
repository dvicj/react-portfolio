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
      <a className="foot-link" href="https://github.com/dvicj">
        <FontAwesomeIcon icon={faGithub}/>
      </a>
      <a className="foot-link" href="https://www.instagram.com/devinvjones/">
        <FontAwesomeIcon icon={faInstagram}/>
      </a>
      <a className="foot-link" href="https://www.instagram.com/devinvjones/">
        <FontAwesomeIcon icon={faLinkedin}/>
      </a>
      <a className="foot-link" href="https://open.spotify.com/user/dvjones-ca">
        <FontAwesomeIcon icon={faSpotify}/>
      </a>
      <a className="foot-link" href="mailto:devinvjones@gmail.com">
        <FontAwesomeIcon icon={faEnvelope}/>
      </a>
    </section>
  )
}

export default Footer; 