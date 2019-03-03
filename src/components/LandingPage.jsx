import React, { Component } from 'react';
import withScrollReveal from 'react-scrollreveal'

class LandingPage extends Component {
  render() {
    const {animationContainerReference} = this.props

    return (
      <div ref={animationContainerReference}>
        <div className="LandingPage">
          <h1>CAM <span>SLUPEIKS</span></h1>
          <h2>
            <i className="fas fa-map-pin"></i> Ottawa, ON
          </h2>
          <div className="Links">
            <a href="../../public/resume.pdf" target="blank" title="Resume"><i className="far fa-file-alt"></i></a>
            <a href="mailto:cameron.slupeiks@carleton.ca"><i className="fas fa-envelope-square"></i></a>
            <a href="https://www.linkedin.com/in/cameronslupeiks/" target="blank"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/cameronSlupeiks" target="blank"><i className="fab fa-github-square"></i></a>
          </div>
        </div>
      </div>  
    );
  }
}

export default withScrollReveal([
  {
    selector: '.LandingPage',
    options: {
      duration: 1500,
      delay: 400,
      distance: '-50px'
    }
  }
]) (LandingPage);