import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import BioPage from './components/BioPage';
import SkillsPage from './components/SkillsPage';
import Footer from './components/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-landing">
          <LandingPage/>
        </div>
        <div className="App-bio">
          <BioPage/>
        </div>
        <div className="App-skills">
          <SkillsPage/>
        </div>
        <div className="App-footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
