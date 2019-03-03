import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer py-3" id="footer">
        <div className="icons">
          <a href="tel:1-613-668-7949">
            <i className="fas fa-mobile"></i>
          </a>
          <a href="https://www.instagram.com/cameronslupeiks/?hl=en" target="blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://open.spotify.com/user/cameronslupeiks?si=W8vrN4rZR3-mU87YwYFPBg" target="blank">
            <i className="fab fa-spotify"></i>
          </a>
          <a href="https://twitter.com/CameronSlupeiks" target="blank">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;