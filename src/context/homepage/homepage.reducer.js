import { homepageActionTypes as actions } from "./homepage.actions";

export const homepageReducer = ( state, { type, payload } ) => {
  switch ( type ) {
    case actions.LOGGED_IN:
      return {
        ...state,
        loggedIn: payload,
      };
    default:
      return state;
  }
};
