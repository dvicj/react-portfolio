import React from 'react';
import aboutImage from '../../assets/cover/about-me-photo.jpg'
import resumeImage from '../../assets/cover/Devin-Jones-Resume.png'

function About() {

  return (
    <section className="my-5 about-sec">
      <div className="my-2">
      <h1 id="about">ABOUT ME</h1>
        <img id="about-image" src={aboutImage} alt='me'/>
        <p id="about-text">
          Thanks for checking out my portfolio! My name is Devin. I am a 27 year old living in Ontario, Canada. 
          I am learning to code and I love creating beautiful and functional websites from scratch. Feel free to check me
          out at any of the links below. Thanks! 
        </p>
      <a className="resume-dl" href={resumeImage} title="Devin Jones Resume" download>Download my resume</a>
      </div>
    </section>
  )
}

export default About