import React, { Component  } from 'react'

// Navbar
import Navbar from '../navbar/navbar.js';
import SignBtn from '../navbar/signButton.js';

// Modals
import SignIn from '../modals/signIn.js';
import SignUp from '../modals/signUp.js';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalSignIn: false,
      modalSignUp: false,
    }
  }

  openModalSignIn() {
    this.setState({ 
      modalSignIn: !this.state.modalSignIn,
      modalSignOut: false,
    });
  }

  openModalSignUp() {
    this.setState({ 
      modalSignUp: !this.state.modalSignUp,
      modalSignOut: false,
    });
  }

  render() {
    return(
      <div>
        <Navbar>
          <SignBtn text="Sign In" openModal={this.openModalSignIn.bind(this)}/> 
          <SignBtn text="Sign Up" openModal={this.openModalSignUp.bind(this)} />
        </Navbar>
        <div className="center-align">
          <h1>Body Mass Index</h1>
          <p>Enter to your account to uses the calculator</p>
        </div>
        <SignIn open={this.state.modalSignIn} />
        <SignUp open={this.state.modalSignUp} />
      </div>

    );
  }
}
