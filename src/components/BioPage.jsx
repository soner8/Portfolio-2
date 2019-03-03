import React, { Component } from 'react';

class BioPage extends Component {
  render() {
    return(
      <div className="BioPage">
        <h1>{"{WHO"}<span> AM </span>{"I}"}</h1>
        <p>
          Hi, I'm Cam <span role="img" aria-label="Wave">👋🏼</span><br/>
          3<sup>rd</sup> Year Computer Science Major <span role="img" aria-label="Computer">💻</span><br/>
          Aspiring Full Stack Engineer <span role="img" aria-label="Pancakes">🥞</span><br/>
					Part-Time Cycling Enthusiast <span role="img" aria-label="Cyclist">🚴🏼‍</span><br/> 
					Full-Time Taco Consumer <span role="img" aria-label="Taco">🌮</span><br/>
        </p>
      </div>
    );
  }
}

export default BioPage;