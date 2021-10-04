import React, { createContext, useReducer } from 'react'

const initialState = {
    user: {},
    isAuthenticated: false
}

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'LOGIN':
                return {
                    ...state,
                    user: action.payload,
                    isAuthenticated: !!state.isAuthenticated
                }
            case 'LOGOUT':
                return {
                    state: {}
                }
            default:
                return state
        }
    }, initialState)

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext;