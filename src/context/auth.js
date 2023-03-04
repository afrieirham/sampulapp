import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const verify = async () => {
      const savedKey = localStorage.getItem("sampul-key");
      const raw = await fetch("/api/auth?key=" + savedKey);
      const { status } = await raw.json();

      if (status) {
        setAuth(true);
      } else {
        localStorage.removeItem("sampul-key");
        setAuth(false);
      }
    };
    verify();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
