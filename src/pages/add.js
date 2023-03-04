import React, { useContext } from "react";

import { AuthContext } from "../context/auth";
import Login from "../components/Login";
import AddTransaction from "../components/AddTransaction";

function Add() {
  const { auth } = useContext(AuthContext);

  if (!auth) return <Login />;
  return <AddTransaction />;
}

export default Add;
