import React, { Component } from 'react';

import Alert from '../alert/alert.js';
import Info from './info.js';
import Category from './category.js';
import Form from '../form/formWrap.js';

import { getUser, updateUser, getCategory } from '../providers/index.js';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      height: 0,
      id: 0,
      info: null,
      category: null,
      alert: null
    }
  }

  componentDidMount() {
    getUser(this.handleError.bind(this))
      .then(response => {
        this.updateUserInfo(response.data);
      getCategory(response.data.id)
        .then(response => this.updateUserCategory(response))
        .catch(console.error);
      }).catch(console.error);

  }

  getData() {
    return {
      weight: Number(this.state.weight),
      height: Number(this.state.height) 
    }
  }

  updateUserInfo({ id, email, weight, height, bmi }) {
    this.setState({
      id,
      info: <Info email={email} weight={weight} height={height} bmi={bmi} />
    });
  }

  updateUserCategory({ data }) {
    const name = data ? data.name : 'No category';
    this.setState({ category: <Category name={name} />});
  }

  handleWeight = ({ target }) => {
    this.setState({ weight: target.value })
  }

  handleHeight = ({ target }) => {
    this.setState({ height: target.value })
  }

  handleError = ({ data }) => {
    this.setState({
      alert: <Alert type='error' message={data.error}/>
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateUser(this.state.id, this.getData(), this.handleError.bind(this));
      this.updateUserInfo(data);
      getCategory(this.state.id)
        .then(response => this.updateUserCategory(response))
        .catch(console.error);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return(
      <div className="">
        <div className="row">
          <div className="col s6">
            <Form>
              <div className="input-field col s6">
                <input 
                  type="number"
                  className="validate" 
                  id="weight"
                  value={this.state.weight}
                  onChange={this.handleWeight.bind(this)} />
                <label htmlFor="weight">Weight (KG)</label>
              </div>
              <div className="input-field col s6">
                <input 
                  type="number"
                  className="validate" 
                  id="height"
                  value={this.state.height}
                  onChange={this.handleHeight.bind(this)} />
                <label htmlFor="height">Height (Mts)</label>
              </div>
              <button 
                className="btn-large waves-effect waves-light"
                type="submit"
                name="calculate"
                onClick={this.handleSubmit.bind(this)}>
                Calculate 
              </button>
              {this.state.alert}
            </Form>
            {this.state.category}
          </div>
          <div className="col s6">
            {this.state.info}
          </div>
        </div>
     </div>
    );
  }
} 
