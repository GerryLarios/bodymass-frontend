import React, { Component } from 'react';

// Navbar
import Navbar from '../navbar/navbar.js';
import SignBtn from '../navbar/signButton.js';

// Modals
import SignOut from '../modals/signOut.js';

// User
import User from '../user/user.js';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalSignOut: false
    }
  }

  openModalSignOut() {
    this.setState({ modalSignOut: !this.state.modalSignOut })
  }

  render() {
    return(
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
    );
  }
}
