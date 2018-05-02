import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './../../validate'
import renderField from './../../renderField'
import { Values } from "redux-form-website-template";

const legals = ["Company", "Individual"];

const renderLegalSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a legal...</option>
      {legals.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const WizardFormFirstPage = (props) => {
  const value = (e) => {
    let user = JSON.stringify(e, null, 2)
    return user
  }
  const { handleSubmit } = props
  return (
      <div className="col-sm-6 col-sm-offset-3 form-box">
    <fieldset>
      <div className="form-top">
        <div className="form-top-left">
        <h3>Step 1 / 3</h3>
        </div>
        <div className="form-top-right">
          <i className="fa fa-user"></i>
        </div>
      </div>
    <form onSubmit={handleSubmit} >
      <div className="form-bottom"> 
      <Field name="firstName" type="text" user={value} component={renderField} label="First Name"/>
      <Field name="lastName" type="text" component={renderField} label="Last Name"/>
      <Field name="country" type="text" component={renderField} label="Country"/>
      <Field name="city" type="text" component={renderField} label="City"/>
      <Field name="address" type="text" component={renderField} label="Address"/>
      <Field name="address_2" type="text" component={renderField} label="Address-2"/>
      <div>
        <label>Select legal form</label>
        <Field name="legalForm" component={renderLegalSelector} />
      </div>
      <button type="submit" className="btn btn-next">Next</button>
      </div>
    </form>
    </fieldset>
    </div>
  ) 
}

export default reduxForm({
  form: 'wizard',                 
  destroyOnUnmount: false,        
  forceUnregisterOnUnmount: true,  
  validate
})(WizardFormFirstPage)