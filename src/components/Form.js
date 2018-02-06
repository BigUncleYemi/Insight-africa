import React, { Component } from 'react';
import '../css/index.css';

class Form extends Component {
    createForm(e) {
        e.preventDefault();
        var form = {
            firstName: this.fname.value,
            LastName: this.lname.value,
            email: this.email.value,
            phoneNumber: this.phoneNumber.value,
            password: this.password.value,
            cPassword: this.cPassword.value
        };
        this.props.addForm(form);
        this.newForm.reset();
    }

    render() {
        return (
            <div>
                <div className="field">
                    <h2>Sign up</h2>
                    <form ref={(input) => this.newForm = input} className="form" name="myForm" onSubmit={(e) => this.creatForm(e)}>
                        <div className="row">
                            <div className="row-form">
                                <div className="col-left">
                                    <label htmlFor="firstname">First name: </label>
                                    <input ref={(input) => this.fname = input} type="text" required className="col-left" name="fName" placeholder="FirstName" />
                                </div>
                                <div className="col-right">
                                    <label htmlFor="lastname">last name: </label>
                                    <input ref={(input) => this.lname = input} type="text" required className="col-left" id="lName" placeholder="LastName" />
                                </div>
                       	 </div>
                       	 <div className="row-form">
                                <div className="col-left">
                                    <label htmlFor="phone">Phone number: </label>
                                    <input ref={(input) => this.phoneNumber = input} type="tel" className="col-left" id="phone" placeholder="phone number" pattern="[0-9]{11}" />
                                </div>
                                <div className="col-right">
                                    <label htmlFor="email">Email: </label>
                                    <input ref={(input) => this.email = input} type="email" default required className="col-left" id="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" />
                                </div>
							 </div>   
							 <div className="row-form">                  
                                <div className="col-left">
                                    <label htmlFor="password">Password: </label>
                                    <input ref={(input) => this.password = input} type="password" required className="col-left" id="password" placeholder="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
                                </div>
                            </div>
                        </div>
                        <center>
                            <input type="submit" defaultValue="submit" id="button" />
                        </center>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;
