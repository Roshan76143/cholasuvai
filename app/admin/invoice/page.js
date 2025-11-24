"use client";

import { useState, useRef } from "react";
import html2canvas from "html2canvas";

export default function InvoiceGenerator() {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [items, setItems] = useState([{ name: "", qty: 1, price: 0 }]);
  const [createdBy, setCreatedBy] = useState("Admin");
  const [employeeID, setEmployeeID] = useState("CS001");

  const invoiceRef = useRef();

  const addItem = () => setItems([...items, { name: "", qty: 1, price: 0 }]);
  const removeItem = (index) => setItems(items.filter((_, i) => i !== index));

  const totalAmount = items.reduce((acc, i) => acc + i.qty * i.price, 0);

  const generateImage = () => {
    html2canvas(invoiceRef.current).then(canvas => {
      const link = document.createElement("a");
      link.download = `invoice_${customerName}.png`;
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Invoice Generator</h1>

      <label>Customer Name</label>
      <input type="text" value={customerName} onChange={e => setCustomerName(e.target.value)} style={{ width: "100%", marginBottom: "10px" }} />

      <label>Customer Phone</label>
      <input type="text" value={customerPhone} onChange={e => setCustomerPhone(e.target.value)} style={{ width: "100%", marginBottom: "10px" }} />

      <label>Created By</label>
      <input type="text" value={createdBy} onChange={e => setCreatedBy(e.target.value)} style={{ width: "100%", marginBottom: "10px" }} />

      <label>Employee ID</label>
      <input type="text" value={employeeID} onChange={e => setEmployeeID(e.target.value)} style={{ width: "100%", marginBottom: "10px" }} />

      <h2>Items</h2>
      {items.map((item, idx) => (
        <div key={idx} style={{ marginBottom: "10px" }}>
          <input type="text" placeholder="Item Name" value={item.name} onChange={e => { const newItems = [...items]; newItems[idx].name = e.target.value; setItems(newItems); }} />
          <input type="number" placeholder="Qty" value={item.qty} onChange={e => { const newItems = [...items]; newItems[idx].qty = parseInt(e.target.value); setItems(newItems); }} />
          <input type="number" placeholder="Price" value={item.price} onChange={e => { const newItems = [...items]; newItems[idx].price = parseFloat(e.target.value); setItems(newItems); }} />
          <button onClick={() => removeItem(idx)} style={{ marginLeft: "5px" }}>Remove</button>
        </div>
      ))}
      <button onClick={addItem} style={{ marginBottom: "10px" }}>Add Item</button>

      <div ref={invoiceRef} style={{ padding: "20px", border: "2px solid #000", marginTop: "20px" }}>
        <h2 style={{ textAlign: "center" }}>CHOLA SUVAI</h2>
        <p>Customer: {customerName} | Phone: {customerPhone}</p>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #000" }}>Item</th>
              <th style={{ border: "1px solid #000" }}>Qty</th>
              <th style={{ border: "1px solid #000" }}>Price</th>
              <th style={{ border: "1px solid #000" }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((i, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid #000" }}>{i.name}</td>
                <td style={{ border: "1px solid #000" }}>{i.qty}</td>
                <td style={{ border: "1px solid #000" }}>{i.price}</td>
                <td style={{ border: "1px solid #000" }}>{i.qty * i.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Total: ₹{totalAmount}</h3>
        <p>Created By: {createdBy} | Employee ID: {employeeID}</p>
      </div>

      <button onClick={generateImage} style={{ marginTop: "20px", padding: "10px", background: "#000", color: "white" }}>Download Invoice (PNG)</button>
    </div>
  );
}
