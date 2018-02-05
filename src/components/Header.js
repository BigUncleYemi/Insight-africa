import React, { Component } from 'react';
import logo2 from '../img/logo2.jpeg';

class Header extends Component {
  
    render() {
      return (
        <div>
          <header>
              <img src={logo2} alt="logo" />
              <h1>we innovate with knowledge and pedagogy</h1>
          </header>
        </div>
      );
    }
  }
  
  export default Header;
  
