import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Login from "../Pages/Login/Login";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user?.email) {
    return children;
  }
  return <Login to="/login" replace></Login>;
};

export default PrivateRoute;
