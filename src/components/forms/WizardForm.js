import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WizardFormFirstPage from './../pages/WizardFormFirstPage'
import WizardFormSecondPage from './../pages/WizardFormSecondPage';
import WizardFormThirdPage from './../pages/WizardFormThirdPage';
import {connect} from 'react-redux';
import setUser from './../../actions/actionUser'
import prevPage from './../../actions/prevPageAction'
import nextPage from './../../actions/nextPageAction'
import Congrats from './../pages/Congrats';


class WizardForm extends Component {
  constructor(props) {
    super(props);

  }
  render() { 
    let page=this.props.page
    return (
      <div>
        {page === 1 && <WizardFormFirstPage onSubmit={this.props.nextPage}  />}
        {page === 2 &&
          <WizardFormSecondPage
            previousPage={this.props.prevPage}
            onSubmit={this.props.nextPage}
          />}
        {page === 3 &&
          <WizardFormThirdPage
            previousPage={this.props.prevPage}
            // onSubmit={this.saveResults}
            onSubmit={this.props.setUserFunction}
          />}  
        {page === 4 &&
          <Congrats    
          />}
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    user: state.user.user,
    page: state.user.page
  }
}

function mapDispatchToProps(dispatch){
  return {
    setUserFunction: (user) => {
      dispatch(setUser(user))
    },
    nextPage: () => {
      dispatch(nextPage())
    },
    prevPage: () => {
      dispatch(prevPage())
    }
  }
}

export default connect( mapStateToProps,mapDispatchToProps) (WizardForm)
