import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/landingPage/landingPage";
import { Login } from "../pages/login/login";
import { Register } from "../pages/register/register";
import { Home } from "../pages/home/home";
import { ProtectedRoutes } from "./protectedRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};
