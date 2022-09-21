import { createContext, useEffect, useReducer } from 'react';
import authReducer from './auth';

// const INITIAL_STATE = {
//   user: JSON.parse(localStorage.getItem('user')) || null,
//   isFetching: false,
//   error: false
// };

const initialState = {
  token: localStorage.getItem('token'),
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
    <AuthContextProvider
      value={{
        // user: state.user,
        // isFetching: state.isFetching,
        // error: state.error,
        token: localStorage.setItem('user', JSON.stringify(state.user)),
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        dispatch
      }}
    >
      {children}
    </AuthContextProvider>
  );
};
