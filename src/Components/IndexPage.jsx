import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function IndexPage() {
  const API = import.meta.env.VITE_API_URL;
  const [amount, setAmount] = useState([]);
  let [sum, setSum] = useState(0); // if it const it cant be iterable
  //The JavaScript exception "invalid assignment to const" occurs when
  //it was attempted to alter a constant value. JavaScript const declarations can't be re-assigned or redeclared

  useEffect(() => {
    fetchIndex();
  }, []);

  async function fetchIndex() {
    try {
      let result = await axios.get(`${API}/transaction`);
      console.log(result.data);

      for (let i of result.data) {
        setSum((sum += Number(i.amount)));
        //console.log(sum);
      }

      setAmount(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  function color(sum) {
    if (sum > 100) return "green";
    else if (sum < 0) return "red";
    else if (0 > sum < 100) return "yellow";
  }

  return (
    <div>
      <div>
        <h2>
          Bank Account Toatl:{" "}
          <span style={{ color: `${color(sum)}` }}>{sum}</span>
        </h2>
      </div>
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
