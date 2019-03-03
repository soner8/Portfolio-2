import React, { Component } from 'react';

class BioPage extends Component {
  render() {
    return(
      <div className="BioPage">
        <h1>{"{WHO"}<span> AM </span>{"I}"}</h1>
        <p>
          Hi, I'm <u>Cam</u> <span role="img" aria-label="Wave">👋🏼</span><br/>
          3<sup>rd</sup> Year <u>Computer Science</u> Major <span role="img" aria-label="Computer">💻</span><br/>
          Aspiring <u>Full Stack</u> Engineer <span role="img" aria-label="Pancakes">🥞</span><br/>
					Part-Time <u>Cycling</u> Enthusiast <span role="img" aria-label="Cyclist">🚴🏼‍</span><br/> 
					Full-Time <u>Taco</u> Consumer <span role="img" aria-label="Taco">🌮</span><br/>
        </p>
      </div>
    );
  }
}

export default BioPage;