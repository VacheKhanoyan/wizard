import React from 'react';
import { reduxForm } from 'redux-form';

const Congrats = props => {
  return (
    <div className="col-sm-6 col-sm-offset-3 form-box">
      <fieldset>
        <div className="form-top">
          <div className="form-top-left">
            <h3>Congratulation</h3>
          </div>
          <div className="form-top-right">
            <i className="fa fa-check-circle"></i>
          </div>
        </div>
        <div className="form-bottom"> 
          Your registration is success
        </div>  
      </fieldset>
    </div>
  );
};

export default reduxForm({
  form: 'wizard', 
  destroyOnUnmount: false, 
  forceUnregisterOnUnmount: true, 
})(Congrats);
