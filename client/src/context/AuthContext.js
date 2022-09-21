import { createContext, useEffect, useReducer } from 'react';
import authReducer from '../reducers/auth';
// import AuthReducer from "./AuthReducer";

// const INITIAL_STATE = {
//   user:JSON.parse(localStorage.getItem("user")) || null,
//   isFetching: false,
//   error: false,
// };

const initialState = {
  isAuthenticated: null,
  loading: true,
  user: null
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,

        // user: state.user,
        // isFetching: state.isFetching,
        // error: state.error,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
