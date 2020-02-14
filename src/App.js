import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import M from 'materialize-css';

// Components
import Navbar from './navbar/navbar.js';
import SignBtn from './navbar/signButton.js';

// Modals
import SignIn from './modals/signIn.js';
import SignUp from './modals/signUp.js';
import SignOut from './modals/signOut.js';

// User
import User from './user/user.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      modalSignIn: false,
      modalSignUp: false,
      modalSignOut: false
    }
  }

  componentDidMount() {
    M.AutoInit();
    const token = localStorage.getItem('token');
    if (token) this.setState({ logged: true });
  }

  openModalSignIn() {
    this.setState({ 
      modalSignIn: !this.state.modalSignIn,
      modalSignOut: false,
      modalSignUp: false
    });
  }

  openModalSignUp() {
    this.setState({ 
      modalSignUp: !this.state.modalSignUp,
      modalSignOut: false,
      modalSignIn: false
    });

  }

  openModalSignOut() {
    this.setState({
      modalSignOut: !this.state.modalSignOut,
      modalSignUp: false,
      modalSignIn: false
    });
  }

  renderBody() {
    if(!this.state.logged) {
      return(
        <div className="App">
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
        </div>
      );
    }
    return(
      <div className="App">
        <div>
          <Navbar>
            <SignBtn text="Sign Out" openModal={this.openModalSignOut.bind(this)} />
          </Navbar>
          <div className="center-align">
            <h1>Body Mass Index</h1>
          </div>
          <SignOut open={this.state.modalSignOut} />
          <div className="container">
            <User />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return this.renderBody();
  }
}

export default App;
