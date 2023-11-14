import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ShowPage() {
  const API = import.meta.env.VITE_API_URL;
  const [single, setSingle] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchShow();
  }, []);

  async function fetchShow() {
    try {
      let result = await axios.get(`${API}/transaction/${id}`);
      console.log(result.data);
      setSingle(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleBackButton() {
    navigate("/transaction");
  }

  function handleEditButton() {
    navigate(`/transaction/${id}/edit`);
  }

  async function handleDeleteButton() {
    try {
      await axios.delete(`${API}/transaction/${id}`);
      navigate(`/transaction`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div>
        <p>name: {single.item_name}</p>
        <p>amount: {single.amount}</p>
        <p>date: {single.date}</p>
        <p>from: {single.from}</p>
        <p>category: {single.category}</p>
      </div>
      <div>
        <button onClick={handleBackButton}>BACK</button>
        <button onClick={handleEditButton}>EDIT</button>
        <button onClick={handleDeleteButton}>DELETE</button>
      </div>
    </div>
  );
}

export default ShowPage;
