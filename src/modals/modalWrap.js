import React, { Component } from 'react';

const display = {
  display: 'block'
}

const hide = {
  display: 'none'
}

class Modal extends Component {
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

  toggle = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    return(
      <div className="modal" style={this.state.open ? display : hide } > 
        <div className="modal-content">
          <h4>{this.props.title}</h4>
          {this.props.children}
        </div>
        <div className="model-footer">
          <a 
            className="modal-close waves-effect waves-green btn-flat"
            href='#modal'
            onClick={ this.toggle.bind(this) }>
            Close
          </a>
        </div>
      </div>
    );
  }
}

export default Modal
