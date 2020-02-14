import React, { Component } from 'react';
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
      info: null,
      category: null,
      id: 0
    }
  }

  componentDidMount() {
    getUser().then(({ data }) => {
      const info = <Info email={data.email} weight={data.weight} height={data.height} bmi={data.bmi} />
      this.setState({ info, id: data.id });
      getCategory(data.id).then(({ data }) => {
        const name = data ? data.name : 'No category';
        const category = <Category name={name} />
        this.setState({ category });
      });
    });
  }

  getData() {
    return {
      weight: this.state.weight,
      height: this.state.height
    }
  }

  handleWeight = ({ target }) => {
    this.setState({ weight: target.value })
  }

  handleHeight = ({ target }) => {
    this.setState({ height: target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateUser(this.state.id, this.getData());
      const info = <Info email={data.email} weight={data.weight} height={data.height} bmi={data.bmi} />
      this.setState({ info });
      getCategory(this.state.id).then( ({ data }) => {  
        const name = data ? data.name : 'No category';
        const category = <Category name={name} />
        this.setState({ category });
      });
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
