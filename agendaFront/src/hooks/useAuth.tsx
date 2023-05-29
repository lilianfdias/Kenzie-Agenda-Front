import { AuthContext } from "../providers/authProvider";
import { useContext } from "react";

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};
