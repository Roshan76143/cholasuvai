"use client";

import { useState } from "react";

export default function AddProduct() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    alert(`Product Added:\nName: ${productName}\nCategory: ${category}\nPrice: ₹${price}\nStock: ${stock}`);
    // Here we will connect database later
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Add Product (Admin)</h1>

      <label>Product Name</label>
      <input type="text" value={productName} onChange={e=>setProductName(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />

      <label>Category</label>
      <input type="text" value={category} onChange={e=>setCategory(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />

      <label>Price (₹)</label>
      <input type="number" value={price} onChange={e=>setPrice(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />

      <label>Stock</label>
      <input type="number" value={stock} onChange={e=>setStock(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />

      <label>Product Image URL</label>
      <input type="text" value={image} onChange={e=>setImage(e.target.value)} placeholder="Paste image URL" style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />

      <button onClick={handleSubmit} style={{ padding: "10px", background: "#000", color: "white", border: "none", cursor: "pointer" }}>
        Add Product
      </button>
    </div>
  );
}
