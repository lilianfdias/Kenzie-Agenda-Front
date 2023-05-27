import { Routes, Route } from "react-router-dom";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/login" />
      <Route path="/register" />
      <Route path="/home" />
    </Routes>
  );
};
