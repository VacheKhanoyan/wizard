import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import WizardForm from "./WizardForm";


ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 50 }}>
      <WizardForm />
    </div>
  </Provider>,
  document.getElementById("root")
);
