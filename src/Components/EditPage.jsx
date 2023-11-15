import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditPage() {
  const API = import.meta.env.VITE_API_URL;
  const { index } = useParams();
  const navigate = useNavigate();

  const [item_name, setItem_Name] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [from, setFrom] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchEdit();
  }, []);

  async function fetchEdit() {
    try {
      let result = await axios.get(`${API}/transaction/${index}`);
      console.log(result.data);
      setItem_Name(result.data.item_name);
      setAmount(result.data.amount);
      setDate(result.data.date);
      setFrom(result.data.from);
      setCategory(result.data.category);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`${API}/transaction/${index}`, {
        item_name: item_name,
        amount: amount,
        date: date,
        from: from,
        category: category,
      });

      navigate("/transaction");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <h2>Edit Form</h2>
        <form onSubmit={handleOnSubmit}>
          <div>
            <label>Item Name</label>
            <input
              type="text"
              value={item_name}
              onChange={(e) => setItem_Name(e.target.value)}
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div>
            <label>Date</label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label>From</label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div>
            <label>Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <button type="submit">Edit Item</button>
        </form>
      </div>
    </>
  );
}

export default EditPage;
