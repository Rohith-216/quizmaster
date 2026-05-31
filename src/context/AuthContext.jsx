import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const adminExists = users.some(
      (user) => user.email === "admin@quiz.com"
    );

    if (!adminExists) {
      users.push({
        id: 1,
        name: "Admin",
        email: "admin@quiz.com",
        password: "admin123",
        role: "admin",
      });

      localStorage.setItem(
        "users",
        JSON.stringify(users)
      );
    }

    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const login = (email, password) => {
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (foundUser) {
      setUser(foundUser);

      localStorage.setItem(
        "currentUser",
        JSON.stringify(foundUser)
      );

      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);