import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <div className="col-sm-6 col-sm-offset-3 form-box">
      <fieldset>
        <div className="form-top">
          <div className="form-top-left">
            <h3>Step 2 / 3</h3>
          </div>
          <div className="form-top-right">
            <i className="fa fa-cube"></i>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-bottom"> 
            <div>
              <label>Package</label>
              <div>
                  <div>
                <label>
                  <Field name="package" component="input" type="radio" value="standard" />
                  Standard Package
                </label>
                </div>
                <div>
                <label>
                  <Field name="package" component="input" type="radio" value="premium" />
                  Premium Package
                </label>
                </div>
                <Field name="package" component={renderError} />
              </div>
            </div>
            <div>
              <button type="button" className="btn btn-previous" onClick={previousPage}>
                Previous
              </button>
              <button type="submit" className="btn btn-next">Next</button>
            </div>
          </div>  
        </form>
      </fieldset>
    </div>
  );
};

export default reduxForm({
  form: 'wizard', 
  destroyOnUnmount: false, 
  forceUnregisterOnUnmount: true, 
  validate,
})(WizardFormSecondPage);
