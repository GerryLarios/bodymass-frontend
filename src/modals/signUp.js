import React, { Component } from 'react';

// Components
import Wrap from '../modals/modalWrap.js';
import Form from '../form/formWrap.js';
import Alert from '../alert/alert.js';

// Providers
import { createUser } from '../providers/index.js';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
      email: '',
      password: '',
      alert: null
    }
  }

  updateOpen() {
    this.setState({ 
      open: this.props.open,
      alert: null
    });
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

  handleError = ({ data }) => {
    this.setState({
      alert: <Alert type='error' message={data.message} />
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createUser(this.getData(), this.handleError.bind(this));
      alert(`User ${data.email} added.`);
      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  }

  render(){
    return(
      <Wrap title="Sign Up" open={this.state.open}>
        <Form>
          <div className="input-field col s6">
            <input 
              type="email"
              className="validate" 
              id="emailUp"
              value={this.state.mail}
              onChange={this.handleEmail.bind(this)} />
            <label htmlFor="emailUp">Email</label>
          </div>
          <div className="input-field col s6">
            <input 
              type="password"
              className="validate" 
              id="passwordUp"
              value={this.state.password}
              onChange={this.handlePassword.bind(this)} />
            <label htmlFor="passwordUp">Password</label>
          </div>
          <button 
            className="btn waves-effect waves-light"
            type="submit"
            name="singUp"
            onClick={this.handleSubmit.bind(this)}>
            Sign Up 
            <i className="material-icons right">send</i>
          </button>
          {this.state.alert}
        </Form>
      </Wrap>
    );
  }
}

