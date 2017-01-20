import { combineForms } from 'react-redux-form'

import { combineReducers } from 'redux'
const initialState = {
  host: '',
  protocol: ''
}

const sourceRequest = (state = initialState, action) => state
/*

 const initialUser = {
 firstName: '',
 lastName: '',
 email: '',
 password: '',
 dateOfBirth: '',
 phoneNumber: ''
 }
 */
const initialUser = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  dateOfBirth: '',
  phoneNumber: '',
  dentalHistoryQuestions: {},
  goals: {},
  selectedDoctor: '',
  insuranceProvider: ''
}

// Only combine reducers needed for initial render, others will be
// added async
export default function createReducer (asyncReducers) {
  return combineForms({
    user: initialUser
  });

  // return combineReducers({
  //  form: combineForms({
  //    user: initialUser
  //  }),
  //  sourceRequest,
  //  ...asyncReducers
  //})
}
