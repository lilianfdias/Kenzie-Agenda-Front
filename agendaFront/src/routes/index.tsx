import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/landingPage/landingPage";
import { Login } from "../pages/login/login";
import { Register } from "../pages/register/register";
import { Home } from "../pages/home/home";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
