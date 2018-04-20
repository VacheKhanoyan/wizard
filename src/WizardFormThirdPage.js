import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';



const WizardFormThirdPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <div className="col-sm-6 col-sm-offset-3 form-box">
      <fieldset>
        <div className="form-top">
          <div className="form-top-left">
            <h3>Step 3 / 3</h3>
          </div>
          <div className="form-top-right">
            <i className="fa fa-user"></i>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-bottom"> 
            <Field name="c_card_number" type="text" component={renderField} label="Credit Card number"/>
            <Field name="c_card_name" type="text" component={renderField} label="Credit Card name"/>
            <Field name="c_card_cvc" type="text" component={renderField} label="Credit Card cvc"/>
            <Field name="c_card_exp_date" type="text" component={renderField} label="Credit Card expiration date"/>
            <div>
              <button type="button" className="btn btn-next" onClick={previousPage}>
                Previous
              </button>
              <button type="submit" className="btn btn-next" >Submit</button>
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
})(WizardFormThirdPage);
