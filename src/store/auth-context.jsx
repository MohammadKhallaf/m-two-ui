import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  // IDE auto complete only
  user: { _id: "", username: "" },
  login: (user) => {},
  logout: () => {},
}); // not a default value

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const data = localStorage.getItem("user");
    if (data) {
      return JSON.parse(data);
    }
    return null;
  });

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    if (user) {
      const data = JSON.stringify(user);
      localStorage.setItem("user", data);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
