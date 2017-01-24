import _ from 'lodash'
import { provideHooks, trigger } from 'redial'
import { connect } from 'react-redux'
import React from 'react'
import { Control, Form } from 'react-redux-form'
import { browserHistory } from 'react-router'

import { signIn, signOut } from '../actions'


const mapStateToProps = state => ({
  deep: state.deep,
  account: state.account
})


export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (val, evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      signIn({val, dispatch})
    },
    onSignOut: (auth_token) => {
      signOut({auth_token, dispatch})
    }
  };
}

const inputClass = 'input-field col m12'
const SignIn = (props) => {
  const isLoggedIn = !!props.account.data;
  return (
  <div>
    {!isLoggedIn &&
    <div className="row">
      <Form className="col s12" model='deep.connectedUser' onSubmit={props.onSubmitForm}>
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
            required
          />
          <label htmlFor='password'
                 data-error='Password Must be contain at least 8 characters, least 1 number and both lower and uppercase letters'>Password</label>
        </div>
        <hr />
        {props.account.error &&
        <div style={{color: 'red', fontSize: 14}}>Please check your email and password</div>
        }
        <div>
          <button
            type='submit'
            className='mt-5 float-right btn waves-effect waves-light'
          >Sign In
          </button>
        </div>
      </Form>
    </div>
    }
    {isLoggedIn &&
      <div className="row">
        {_.map(props.account.data, (val, key) => {
          return (
            <div key={key} className='col s12'><strong>{key}:</strong> {val}</div>
          )
        })
        }
        {props.account.error &&
        <div style={{color: 'red', fontSize: 14}}>Could not sign out. Session may already be invalid. To fix, refresh the page.</div>
        }
        <div>
          <button
            onClick={props.onSignOut.bind(null, props.account.data.auth_token)}
            className='mt-5 float-right btn waves-effect waves-light'
          >Sign Out
          </button>
        </div>
      </div>
    }
  </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
