import React from 'react';

function About() {

  return (
    <section className="my-5 about-sec">
      <h1 id="about">ABOUT ME</h1>
      <div className="my-2">
        <p>
          Thanks for checking out my portfolio! My name is Devin. I am a 27 year old living in Ontario, Canada. 
          I am learning to code and I love creating beautiful and functional websites from scratch. Feel free to check me
          out at any of the links below. Thanks! 
      </p>
      <a className="resume-dl" href="resume.html" title="Devin Jones Resume" download>Download my resume</a>
      </div>
    </section>
  )
}

export default About