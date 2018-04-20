const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }else if(!/^[a-zA-Z]+$/.test(values.firstName)){
    errors.firstName= "must contein only letters"
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if(!/^[a-zA-Z]+$/.test(values.lastName)){
    errors.lastName= "must contein only letters"
  }
  if (!values.country) {
    errors.country = 'Required';
  }
  if (!values.city) {
    errors.city = 'Required';
  }
  if (!values.address) {
    errors.address = 'Required';
  }
  if (!values.c_card_number) {
    errors.c_card_number = 'Required';
  } else if(!/^\d+$/.test(values.c_card_number)){
    errors.c_card_number= "must contein only numbers"
  }
  if (!values.c_card_name) {
    errors.c_card_name = 'Required';
  } 
  if (!values.c_card_cvc) {
    errors.c_card_cvc = 'Required';
  }
  if (!values.c_card_exp_date) {
    errors.c_card_exp_date = 'Required';
  }

  if (!values.package) {
    errors.package = 'Required';
  }
  if (!values.legalForm) {
    errors.legalForm = 'Required';
  }
  return errors;
};


export default validate;
