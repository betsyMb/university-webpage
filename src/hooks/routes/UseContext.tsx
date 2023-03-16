// React
import { createContext, useContext } from "react";

// Third party
import { useNavigate } from "react-router-dom";

// Hooks
import { useLocalStorage } from "./useLocalStorage";

type Props = {
  children: JSX.Element;
};

interface UserAuth {
  user: string | null;
  login: (data: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<UserAuth>(null!);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data: string): Promise<void> => {
    setUser(data);
    navigate("/profile");
  };

  // call this function to sign out logged in user
  const logout = (): void => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
