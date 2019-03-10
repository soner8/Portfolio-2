import React, { Component } from "react";
import withScrollReveal from "react-scrollreveal";

class SkillsPage extends Component {
  render() {
    const {animationContainerReference} = this.props

    return (
      <div ref={animationContainerReference}>
        <div className="SkillsPage">
          <h1><span className="arrows">{"<"}</span>SKILLS<span className="arrows">{"/>"}</span></h1>
          <div>
            <div className="Languages">
              <b>LANGUAGES</b>
              <div className="icon-container">
                <i className="devicon-javascript-plain" />
                <i className="devicon-java-plain" />
                <i className="devicon-python-plain" />
                <i className="devicon-ruby-plain" />
                <i className="devicon-go-plain" />
                <i className="devicon-swift-plain" />
                <i className="devicon-c-plain" />
                <i className="devicon-csharp-plain" />
                <i className="devicon-cplusplus-plain" />
              </div>
            </div>
            <div className="Frontend">
              <b>FRONT-END</b>
              <div className="icon-container">
                <i className="devicon-react-original" />
                <i className="devicon-vuejs-plain" />
                <i className="devicon-angularjs-plain" />
                <i className="devicon-jquery-plain" />
                <i className="devicon-bootstrap-plain" /> 
                <i className="devicon-html5-plain" />
                <i className="devicon-css3-plain" /> 
              </div>
            </div>
            <div className="Backend">
              <b>BACK-END</b>
              <div className="icon-container">
                <i className="devicon-nodejs-plain" />
                <i className="devicon-rails-plain" />
                <i className="devicon-django-plain" />
                <i className="devicon-docker-plain" />
                <i className="devicon-mongodb-plain" />
                <i className="devicon-mysql-plain" />
                <i className="devicon-amazonwebservices-original" />
              </div>
            </div>
            <div className="Tools">
              <b>TOOLS</b>
              <div className="icon-container">
                <i className="devicon-git-plain" />
                <i className="devicon-github-plain" />
                <i className="devicon-gitlab-plain" />
                <i className="devicon-jasmine-plain" />
                <i className="fab fa-npm" />
                <i className="devicon-visualstudio-plain" />
                <i className="devicon-vim-plain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withScrollReveal([
  {
    selector: '.Languages',
    options: {
      duration: 2500,
      delay: 200,
    }
  },
  {
    selector: '.Frontend',
    options: {
      duration: 2500,
      delay: 400,
    }
  },
  {
    selector: '.Backend',
    options: {
      duration: 2500,
      delay: 600,
    }
  },
  {
    selector: '.Tools',
    options: {
      duration: 2500,
      delay: 800,
    }
  }
]) (SkillsPage);
