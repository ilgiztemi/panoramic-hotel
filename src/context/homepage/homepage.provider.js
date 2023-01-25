import { useReducer, useMemo, useContext } from "react";
import { homepageReducer } from "./homepage.reducer";
import { homepageActionTypes as actions } from "./homepage.actions";
import { HomepageState } from "./homepage.state";

const HOMEPAGE_STATE = {
  loggedIn: false,
};

export const HomepageStateProvider = ( { children } ) => {
  const [ state, dispatch ] = useReducer( homepageReducer, HOMEPAGE_STATE );
  const value = useMemo(
    () => ( {
      ...state,
      loggedInFn: ( value ) => {
        dispatch( {
          type: actions.LOGGED_IN,
          payload: value,
        } );
      },
    } ),
    [ state ]
  );
  // Wrap the context provider around our component
  return (
    <HomepageState.Provider value={ value }>{ children }</HomepageState.Provider>
  );
};
export const useHomepage = () => useContext( HomepageState );
