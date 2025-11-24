"use client";

import { useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([
    { id: 1, customer: "Ravi", phone: "9876543210", type: "Retail", total: 500, status: "Paid", createdBy: "CS001" },
    { id: 2, customer: "Kumar", phone: "9123456780", type: "Wholesale", total: 1200, status: "Pending", createdBy: "CS002" }
  ]);

  const [expenses, setExpenses] = useState([
    { id: 1, reason: "Purchase", amount: 300 },
    { id: 2, reason: "Delivery", amount: 50 }
  ]);

  const totalRevenue = orders.reduce((acc, o) => acc + o.total, 0);
  const totalExpenses = expenses.reduce((acc, e) => acc + e.amount, 0);
  const profit = totalRevenue - totalExpenses;

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Orders & Expenses Dashboard</h1>

      <h2>Orders</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #000", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Customer</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Phone</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Type</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Total (₹)</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Status</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Created By</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(o => (
            <tr key={o.id}>
              <td style={{ border: "1px solid #000", padding: "8px" }}>{o.id}</td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>{o.customer}</td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>{o.phone}</td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>{o.type}</td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>{o.total}</td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>{o.status}</td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>{o.createdBy}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Expenses</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #000", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Reason</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(e => (
            <tr key={e.id}>
              <td style={{ border: "1px solid #000", padding: "8px" }}>{e.id}</td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>{e.reason}</td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>{e.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Summary</h2>
      <p>Total Revenue: ₹{totalRevenue}</p>
      <p>Total Expenses: ₹{totalExpenses}</p>
      <p>Profit: ₹{profit}</p>
    </div>
  );
}
