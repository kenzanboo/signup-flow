import React from 'react'
import { Control, Form } from 'react-redux-form'
import { browserHistory } from 'react-router';

// TODO use inline styles if we wanted to do more indepth styling
//import { StyleSheet, css } from 'aphrodite'

// TODO implement birth date validation
// const emailPattern='/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
// const phonePattern = '^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$'
// date is only a rough estimate of older than 18
// const datePattern = '^(19[1-9][1-9]\s*|\d{3,})$'

// This is a static page. It uses an array to hold data about the resources
// and maintain DRY
const handleSubmit = (val) => {
  console.log('Saved Form data', val) // this would normally save to server if we had a server
  browserHistory.push('/DentalHistory');
}

const inputClass = 'input-field col s12 m6'
const Home = (props) => {
  return (
    <div className="row">
      <h5>Get started today with your new smile!</h5>
      <Form className="col s12" model='user' onSubmit={(val) => handleSubmit(val)}>
        <div className={inputClass}>
          <Control.text
            id='firstName'
            model='.firstName'
            className='validate'
            pattern='^[a-zA-Z0-9]*$'
            required
          />
          <label htmlFor='firstName'>First Name</label>
        </div>
        <div className={inputClass}>
          <Control.text
            id='lastName'
            model='.lastName'
            className='validate'
            pattern='^[a-zA-Z0-9]*$'
            required
          />
          <label htmlFor='lastName'>Last Name</label>
        </div>
        <div className={inputClass}>
          <Control.text
            id='phoneNumber'
            model='.phoneNumber'
            className='validate'
            pattern='^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$'
            required
          />
          <label htmlFor='phoneNumber' data-error="123-456-7890">Phone Number</label>
        </div>
        <div className={inputClass}>
          <Control
            id='dateOfBirth'
            type='date'
            model='.dateOfBirth'
            className='validate'
            required
          />
          <label htmlFor='dateOfBirth' className='active'>Date Of Birth (18 & older)</label>
        </div>
        <div className={inputClass}>
          <Control
            id='email'
            type='email'
            model='.email'
            className='validate'
            required
          />
          <label htmlFor='email' data-error='Oops, please put in your email'>Email</label>
        </div>
        <div className={inputClass}>
          <Control
            id='password'
            type='password'
            model='.password'
            className='validate'
            title='Password Must be contain at least 8 characters, least 1 number and both lower and uppercase letters'
            pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,100}$'
            required
          />
          <label htmlFor='password' data-error='Password Must be contain at least 8 characters, least 1 number and both lower and uppercase letters'>Password</label>
        </div>
        <div>
          <button type='submit' className='float-right btn waves-effect waves-light'>Create Account</button>
        </div>
      </Form>
    </div>
  )
}


export default Home
