import { createContext, ReactNode } from "react";
import { LoginData } from "../pages/login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { CreateUserData } from "../pages/register/validator";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  signIn: (data: LoginData) => void;
  createUser: (data: CreateUserData) => void;
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);
      const { token } = response.data;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("userToken:token", token);
      navigate("dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const createUser = async (data: CreateUserData) => {
    try {
      await api.post("/users", data);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, createUser }}>
      {children}
    </AuthContext.Provider>
  );
};
