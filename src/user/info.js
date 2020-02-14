import React from 'react';
import Form from '../form/formWrap.js'

export default function(props) {
  return(
    <Form>
      <div className="input-field col s12">
        <input
          id="emailUser"
          type="text"
          value={props.email}
          disabled/>
        <label className="active" htmlFor="emailUser">User</label>
      </div>
      <div className="input-field col s12">
        <input
          id="weightUser"
          type="text"
          value={props.weight || "0.0"}
          disabled/>
        <label className="active" htmlFor="weightUser">Weight</label>
      </div>
      <div className="input-field col s12">
        <input
          id="heightUser"
          type="text"
          value={props.height || "0.0"}
          disabled/>
        <label className="active" htmlFor="heightUser">Height</label>
      </div>
      <div className="input-field col s12">
        <input
          id="bmiUser"
          type="text"
          value={props.bmi || "0.0"}
          disabled/>
        <label className="active" htmlFor="bmiUser">Body Mass Index</label>
      </div>
    </Form>
  );
}
