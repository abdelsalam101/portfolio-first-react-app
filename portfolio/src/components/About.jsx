import React from 'react';

function About() {
  return (
    <div className="container text-white bg-secondary"
    style={{
        minHeight: '60vh',
        maxWidth: '100vw',
        padding: '50px 0',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="row align-items-center w-100">
        <div className="col-5">
          <h1 className="text-center">About Me</h1>
        </div>
        <div className="col-7">
          <p className="text-center">
           Graduated in 2024 from the Faculty of Science, SIM department, with honors. Passionate about technology, problem-solving, and software development, with a strong foundation in computer science. Currently expanding my expertise in full-stack development using Python.
            Beyond tech, I create engaging content on my YouTube channel "Nerd Aflam", where I analyze and review movies with a unique perspective. 
            Always eager to learn, innovate, and connect with like-minded professionals.
          </p>
          <a href="./src/assets/My Cv.pdf" className="btn btn-dark mt-3 text-light" download>
            Download Resume
            </a>
        </div>
      </div>
    </div>
  );
}

export default About;