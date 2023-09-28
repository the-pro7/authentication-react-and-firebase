import React, { useContext, useEffect, useState } from 'react'
import { auth } from './firebase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth'

// const auth = getAuth()

const AuthContext = React.createContext()

export const useAuth = () => useContext(AuthContext)

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup (email, password) {
    createUserWithEmailAndPassword(auth, email, password)
  }

  function login (email, password) {
    signInWithEmailAndPassword(auth, email, password)
  }

  function logout () {
    return auth.signOut()
  }

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged(user => {
      setUser(user)
      setLoading(false)
    })

    return unsubcribe
  }, [])

  const value = {
    user,
    signup,
    login,
    logout
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
