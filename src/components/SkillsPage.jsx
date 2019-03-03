import React, { Component } from "react";
import withScrollReveal from "react-scrollreveal";

class SkillsPage extends Component {
  render() {
    const {animationContainerReference} = this.props

    return (
      <div ref={animationContainerReference}>
        <div className="SkillsPage">
          <h1><span className="arrows">{"<"}</span>SKILLS<span className="arrows">{"/>"}</span></h1>
          <p>
            <span className="Languages">
              <b>LANGUAGES </b>
              <i className="devicon-javascript-plain" />
              <i className="devicon-python-plain" />
              <i className="devicon-ruby-plain" />
              <i className="devicon-go-plain" />
              <i className="devicon-swift-plain" />
              <i className="devicon-c-plain" />
              <i className="devicon-csharp-plain" />
              <i className="devicon-cplusplus-plain" />
              <i className="devicon-java-plain" /> <br/>
            </span>
            <span className="Frontend">
              <b>FRONT-END </b>
              <i className="devicon-react-original" />
              <i className="devicon-vuejs-plain" />
              <i className="devicon-angularjs-plain"></i>
              <i className="devicon-jquery-plain" />
              <i className="devicon-html5-plain" />
              <i className="devicon-css3-plain" /> 
              <i className="devicon-bootstrap-plain" /> <br/>
            </span>
            <span className="Backend">
              <b>BACK-END </b>
              <i className="devicon-nodejs-plain" />
              <i className="devicon-rails-plain" />
              <i className="devicon-django-plain" />
              <i className="devicon-docker-plain" />
              <i className="devicon-mongodb-plain" />
              <i className="devicon-mysql-plain" />
              <i className="devicon-amazonwebservices-original" /> <br/>
            </span>
            <span className="Tools">
              <b>TOOLS </b>
              <i className="devicon-git-plain" />
              <i className="devicon-github-plain" />
              <i className="devicon-gitlab-plain" />
              <i className="devicon-jasmine-plain" />
              <i className="fab fa-npm" />
              <i className="devicon-visualstudio-plain" />
              <i className="devicon-vim-plain" />
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default withScrollReveal([
  {
    selector: '.Languages',
    options: {
      duration: 2000,
      delay: 200,
    }
  },
  {
    selector: '.Frontend',
    options: {
      duration: 2000,
      delay: 400,
    }
  },
  {
    selector: '.Backend',
    options: {
      duration: 2000,
      delay: 600,
    }
  },
  {
    selector: '.Tools',
    options: {
      duration: 2000,
      delay: 800,
    }
  }
]) (SkillsPage);
