import React, { createContext, useState } from 'react'
// import { authReducer } from '../reducers/AuthReducer'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  // State
  const [isAuthenticated, setAuthentication] = useState(false)

  // const [isAuthenticated, dispatch] = useReducer(authReducer, false)
  const toogleAuth = () => { 
    setAuthentication(!isAuthenticated)
  }
  // useEffect
  // useEffect(() => {
  //   alert(
  //     isAuthenticated
  //       ? 'Login Successful'
  //       : 'You are logged out. Please login to see todos.'
  //   )
  // }, [isAuthenticated])

  // context data
  const authContextData = {
    isAuthenticated,
    toogleAuth
  }

  // return
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
