import { createContext, ReactNode, useState, useEffect } from "react";
import { LoginData } from "../pages/login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { CreateUserData } from "../pages/register/validator";
import jwt_decode from "jwt-decode";
import { CreateContactData } from "../components/modals/addContact/validator";

interface AuthProviderProps {
  children: ReactNode;
}

export interface Contact {
  id: string;
  contact_name: string;
  email: string;
  phones_number: string;
  contact_image?: string;
}

interface AuthContextValues {
  signIn: (data: LoginData) => void;
  createUser: (data: CreateUserData) => void;
  createContact: (data: CreateContactData) => void;
  loading: boolean;
  user: CreateUserData;
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
  deleteContact: (id: string) => void;
}

interface TokenContract {
  id: string;
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({} as CreateUserData);
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("userToken:token");

    if (!token) {
      navigate("/login");
      setLoading(false);
      return;
    }
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  useEffect(() => {
    const loadContacts = async () => {
      await renderContacts();
    };
    loadContacts();
  }, []);

  const renderUser = async () => {
    const token: string | null = localStorage.getItem("userToken:token");
    if (token === null) {
      navigate("/login");
      return;
    }
    const id = jwt_decode<TokenContract>(token!).id;

    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const { data } = await api.get(`/users/${id}`);
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderContacts = async () => {
    const token: string | null = localStorage.getItem("userToken:token");
    if (!token) {
      navigate("/login");
      return;
    }

    const { data } = await api.get("/contacs");
    setContacts(data);
  };

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);
      const { token } = response.data;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("userToken:token", token);
      await renderUser();
      navigate("/home");
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

  const createContact = async (data: CreateContactData) => {
    try {
      await api.post("/contacts", data);
      await renderContacts();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteContact = async (id: string) => {
    try {
      await api.delete("/contacts/" + id);
      await renderContacts();
    } catch (error) {
      console.error();
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        createUser,
        user,
        createContact,
        loading,
        contacts,
        setContacts,
        deleteContact,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
