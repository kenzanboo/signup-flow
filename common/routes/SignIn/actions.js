import { format } from 'url';
import host from '../../config/host'
import request from '../../util/request'

import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE
} from '../../constants'


export function signIn ({val: { email, password }, dispatch}) {
  const url = format({
    host: `${host.staging.api}/users/sign_in`,
    query: {
      email,
      password
    }
  })
  request(url, {
    method: 'POST'
  }).then((res) => {
    return res.json()
  }).then((json) => {
    console.log('signIn success', json)
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: json,
      meta: {
        lastFetched: Date.now()
      }
    })
  }).catch( (error) => {
    console.log('server error', error)
    dispatch({
      type: SIGN_IN_FAILURE,
      payload: error,
      meta: {
        lastFetched: Date.now()
      }
    })
  });
}

export function signOut ({auth_token, dispatch}) {
  const url = format({
    host: `${host.staging.api}/users/sign_out`,
    query: {
      auth_token
    }
  })
  request(url, {
    method: 'DELETE'
  }).then((res) => {
    console.log('deleteResponse', res)
    dispatch({
      type: SIGN_OUT_SUCCESS,
      meta: {
        lastFetched: Date.now()
      }
    })
  }).catch( (error) => {
    console.log('server error', error)
    dispatch({
      type: SIGN_OUT_FAILURE,
      payload: error,
      meta: {
        lastFetched: Date.now()
      }
    })
  });
}

