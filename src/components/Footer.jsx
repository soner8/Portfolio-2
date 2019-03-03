import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer text-center py-3" id="footer">
        <a href="tel:1-613-668-7949">
          <i className="fas fa-mobile"></i> +1 (613) 668-7949
        </a>
        <a href="https://www.instagram.com/cameronslupeiks/?hl=en" target="blank_4">
          <i className="fab fa-instagram"></i> cameronslupeiks
        </a>
      </div>
    );
  }
}

export default Footer;