import * as actions from '../actions';

const initialState = {
  activeSignUp: false,
  activeLogIn: false,
  activeNavBar: false,
};

export const reducer = (state = initialState, action) => {
  if (action.type === actions.TOGGLE_SIGN_UP_MODAL) {
    console.log('triggered');
    return Object.assign({}, state, {
      ...state,
      activeSignUp: !state.activeSignUp,
    });
  } else if (action.type === actions.TOGGLE_LOG_IN_MODAL) {
    return Object.assign({}, state, {
      ...state,
      activeLogIn: !state.activeLogIn,
    });
  } else if (action.type === actions.TOGGLE_NAV_BAR) {
    return Object.assign({}, state, {
      ...state,
      activeNavBar: !state.activeNavBar,
    });
  }
  return state;
};
