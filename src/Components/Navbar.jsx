import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  function handleHeader() {
    navigate("/");
  }
  function handleNewTransaction() {
    navigate("/transaction/new");
  }
  return (
    <>
      <h1 onClick={handleHeader}>Budget App</h1>
      <button onClick={handleNewTransaction}>NEW TRANSACTION</button>
    </>
  );
}

export default Navbar;
