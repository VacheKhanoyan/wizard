import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./reducers";

import App from "./container/App";


ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 50 }}>
      <App  />
    </div>
  </Provider>,
  document.getElementById("root")
);
