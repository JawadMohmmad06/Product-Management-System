import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function Auth() {
  const token = localStorage.getItem("Token");
  const id = localStorage.getItem("Id");

  if (!token || !id) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      {id != null ? (
        <Outlet />
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}
