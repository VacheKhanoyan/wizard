import React, { Component } from 'react';
import WizardForm from './../components/forms/WizardForm'

class App extends Component {
  saveResults(values) {
    let user = JSON.stringify(values, null, 2)    
    return user
  }
  render() {
    
    return (
      <div >
         < WizardForm user={this.saveResults}/>  
      </div>
    );
  }
}
export default App;
