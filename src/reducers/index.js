import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import userInfo from "./user"

const reducer = combineReducers({
    form: reduxFormReducer, 
    user: userInfo,
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;