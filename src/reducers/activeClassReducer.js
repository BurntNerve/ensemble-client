import * as actions from '../actions';

const initialState = {
  activeSignUp: false,
};

export const reducer = (state = initialState, action) => {
  if (action.type === actions.TOGGLE_SIGN_UP_MODAL) {
    console.log('triggered');
    return Object.assign({}, state, {
      ...state,
      activeSignUp: !state.activeSignUp,
    });
  }
  return state;
};
