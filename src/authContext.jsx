import React, { useContext, useEffect, useState } from "react";
import { auth, app } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  function signup(email, password) {
    return createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((user) => {
      setUser(user)
    });

    return unsubcribe
  }, []);
  const value = {};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
