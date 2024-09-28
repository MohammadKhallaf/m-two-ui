import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  // IDE auto complete only
  user: { _id: "", username: "" },
  login: (user) => {},
  logout: () => {},
}); // not a default value

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const data = localStorage.getItem("user");
    if (data) {
      return JSON.parse(data);
    }
    return null;
  });

  const login = async (user) => {
    // check if the user is authenticated
    // migrate then catch -> "await | async"

    const { data } = await axios.post(
      process.env.REACT_APP_BASE_URL + "auth/login",
      { ...user }
    );
    const userData = { ...data.user, token: data.token };

    setUser(userData);
    setTimeout(() => {
      navigate("/cart");
    }, 500);

    console.log("Done!");
  };

  const register = (user) => {
    // check if the user is authenticated
    axios
      .post(process.env.REACT_APP_BASE_URL + "auth/register", { ...user })
      .then((response) => {
        toast.success("Registered successfully");
        setTimeout(() => {
          navigate("/login");
        }, 500);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      });
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
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
