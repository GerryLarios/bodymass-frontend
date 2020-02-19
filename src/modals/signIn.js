import React, { Component } from 'react';

// Components
import Wrap from '../modals/modalWrap.js';
import Form from '../form/formWrap.js';
import Alert from '../alert/alert.js';

// Providers
import { authenticate } from '../providers/index.js';


export default class SignIn extends Component {
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

  makeLogin({ data }) {
    localStorage.setItem('token', data.token);
    window.location.reload(false);
  }

  handleEmail = ({ target }) => {
    this.setState({ email: target.value });
  }

  handlePassword = ({ target }) => {
    this.setState({ password: target.value });
  }

  handleError = ({ data }) => {
    this.setState({
      alert: <Alert type='error' message={data.error.user_authentication} />
    });
  }
  
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authenticate(this.getData(), this.handleError.bind(this));
      this.makeLogin(response);
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
          {this.state.alert}
        </Form>
      </Wrap>
    );
  }

}
