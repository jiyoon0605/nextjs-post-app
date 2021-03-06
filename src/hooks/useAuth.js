import { createContext, useContext, useEffect, useState } from "react";
import {
  auth,
  init,
  login as authLogin,
  logOut as authLogOut,
} from "../lib/auth";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    init((user) => {
      setUser(user);
    });

    auth.on("login", setUser);

    return () => auth.off("logout", setUser);
  }, []);

  function logIn() {
    authLogin((user) => setUser(user));
  }
  function logOut() {
    authLogOut(() => setUser(undefined));
  }
  const userContext = { user, logIn, logOut };
  return (
    <AuthContext.Provider value={userContext}>{children}</AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
