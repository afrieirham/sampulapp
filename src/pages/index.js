import React, { useContext } from "react";

import { AuthContext } from "../context/auth";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";

function Home() {
  const { auth } = useContext(AuthContext);

  if (!auth) return <Login />;
  return <Dashboard />;
}

export default Home;
