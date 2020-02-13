import React, { Component } from 'react';
import Wrap from '../modals/modalWrap.js';
import Form from '../form/formWrap.js';

export default class SignOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open
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

  handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.reload(false);
  }

  render() {
    return(
      <Wrap title="Sign Out" open={this.state.open}>
        <Form>
          <div className="input-field col s6">
            <button
              id="exitApp"
              className="btn waves-effect waves-light"
              type="submit"
              name="singOut"
              onClick={this.handleSubmit.bind(this)}>
              OK
              <i className="material-icons right">send</i>
            </button>
          </div>
        </Form>
      </Wrap>
    );
  }

}
