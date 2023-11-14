import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function IndexPage() {
  const API = import.meta.env.VITE_API_URL;
  const [amount, setAmount] = useState([]);

  useEffect(() => {
    fetchIndex();
  }, []);

  async function fetchIndex() {
    try {
      let result = await axios.get(`${API}/transaction`);
      console.log(result.data);
      setAmount(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
          {amount.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <Link to={`/transaction/${index}`}>{item.date}</Link>
                </td>
                <td>
                  <Link to={`/transaction/${index}`}>{item.category}</Link>
                </td>
                <td>
                  <Link to={`/transaction/${index}`}>{item.amount}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default IndexPage;
