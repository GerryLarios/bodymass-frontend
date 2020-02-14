import React, { Component } from 'react';
import Wrap from '../modals/modalWrap.js';
import Form from '../form/formWrap.js';

import { authenticate } from '../providers/index.js';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
      email: '',
      password: ''
    }
  }

  updateOpen() {
    this.setState({ open: this.props.open });
  }

  componentDidMount() {
    this.updateOpen();
  }

  componentDidUpdate(prevProps) {
    if(this.props.open !== prevProps.open)
      this.updateOpen();
  }

  getData() {
    return {
      email: this.state.email,
      password: this.state.password
    }
  }

  handleEmail = ({ target }) => {
    this.setState({ email: target.value });
  }

  handlePassword = ({ target }) => {
    this.setState({ password: target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await authenticate(this.getData());
      localStorage.setItem('token', data.token);
      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  }

  render(){
    return(
      <Wrap title="Sign In" open={this.state.open}>
        <Form>
          <div className="input-field col s6">
            <input 
              type="email"
              className="validate" 
              id="emailIn"
              value={this.state.mail}
              onChange={this.handleEmail.bind(this)} />
            <label htmlFor="emailIn">Email</label>
          </div>
          <div className="input-field col s6">
            <input 
              type="password"
              className="validate" 
              id="passwordIn"
              value={this.state.password}
              onChange={this.handlePassword.bind(this)} />
            <label htmlFor="passwordIn">Password</label>
          </div>
          <button 
            className="btn waves-effect waves-light"
            type="submit"
            name="singin"
            onClick={this.handleSubmit.bind(this)}>
            Sign In
            <i className="material-icons right">send</i>
          </button>
        </Form>
      </Wrap>
    );
  }

}
