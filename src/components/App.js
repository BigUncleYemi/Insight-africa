import React, { Component } from 'react';
import '../css/index.css';
import Header from './Header.js';
import Form from './Form.js';

class App extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <Form />
      </div>
    );
  }
}

export default App;
