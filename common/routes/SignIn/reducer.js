import * as types from '../../constants'

const initialState = {
  data: null,
  lastFetched: null,
  isLoading: false,
  error: null
}

export default function posts (state = initialState, action) {
  switch (action.type) {
    case types.SIGN_IN_REQUEST:
      return { ...state,
        isLoading: true,
        error: null}
    case types.SIGN_IN_SUCCESS:
      console.log('in SIGN_IN_SUCCESS');
      console.log(action.payload);

      return { ...state,
        data: action.payload,
        lastFetched: action.meta.lastFetched,
        isLoading: false,
        error: null
      }
    case types.SIGN_IN_FAILURE:
      return { ...state,
        error: action.payload}

    case types.SIGN_OUT_SUCCESS:

      return { ...state,
        data: null,
        error: null
      }
    case types.SIGN_OUT_FAILURE:
      return { ...state,
        error: action.payload
      }
    default:
      return state
  }
}

// Example of a co-located selector
export const selectPosts = state => state.posts
