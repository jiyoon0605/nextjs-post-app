import { createContext, useContext, useEffect, useState } from "react";
import { init, login as authLogin } from "../lib/auth";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    init((user) => {
      console.log(user);
      setUser(user);
    });
  });

  function logIn() {
    authLogin((user) => setUser(user));
  }
  const userContext = { user, logIn };
  return (
    <AuthContext.Provider value={userContext}>{children}</AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
