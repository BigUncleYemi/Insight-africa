import React, { Component } from 'react';
import '../css/index.css';
import Header from './Header.js';
import Form from './Form.js';

class App extends Component {
  constructor(){
		super();

		this.state ={
				formsFiled:{}
			};
	}
	filledForm(form){
			const formsFiled = {...this.state.formsFiled};
			const timestamp = Date.now();
			formsFiled[`form-${timestamp}`] = form;
			this.setState({ 
				formsFiled
			 });
		}	

	
  render() {
    return (
      <div>
        <Header/>
        <Form addForm={this.filledForm}/>
      </div>
    );
  }
}

export default App;
