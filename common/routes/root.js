// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

import App from '../components/App'
import Home from './Home'

export default function createRoutes (store) {
  const root = {
    path: '/',
    component: App,
    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          require('./SignIn').default(store), // no need to modify store, no reducer
          require('./Goals').default, // no need to modify store, no reducer
          require('./Insurance').default, // no need to modify store, no reducer
          require('./Done').default, // no need to modify store, no reducer
          require('./SelectDoctor').default, // no need to modify store, no reducer
          require('./DentalHistory').default, // no need to modify store, no reducer
          require('./NotFound').default

        ])
      })
    },

    indexRoute: {
      component: Home
    }
  }

  return root
}
