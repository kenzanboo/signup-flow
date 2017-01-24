//import SignIn from './components/SignIn'
//
//export default {
//  path: 'SignIn',
//  component: SignIn
//}


if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
import { injectAsyncReducer } from '../../store'

export default function createRoutes (store) {
  return {
    path: 'SignIn',
    getComponents (location, cb) {
      require.ensure([
        './components/SignIn',
        './reducer'
      ], (require) => {
        let SignInPage = require('./components/SignIn').default
        let signInReducer = require('./reducer').default
        injectAsyncReducer(store, 'account', signInReducer)
        cb(null, SignInPage)
      })
    }
  }
}
