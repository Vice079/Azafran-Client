import {  Route, Routes, Navigate } from "react-router";
import { Login } from "../pages/Login/Login.page";
import { Register } from "../pages/Register/Register.page";

const UnAuthedRoutes = () => {
  return (
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};


export  {UnAuthedRoutes}