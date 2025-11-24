"use client";

import { useState } from "react";

export default function AddStaff() {
  const [staffID, setStaffID] = useState("");
  const [qrCode, setQrCode] = useState("");

  const generateStaffID = () => {
    const id = "CS" + Math.floor(100 + Math.random() * 900);
    setStaffID(id);
    setQrCode(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${id}`);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Add Staff (Admin)</h1>

      <label>Staff Name</label>
      <input type="text" placeholder="Enter Name" style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />

      <label>Phone Number</label>
      <input type="text" placeholder="Enter Phone" style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />

      <label>Joining Date</label>
      <input type="date" style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />

      <label>Role</label>
      <select style={{ width: "100%", padding: "8px", marginBottom: "10px" }}>
        <option>Staff</option>
        <option>Manager</option>
      </select>

      <label>Password</label>
      <input type="password" placeholder="Enter Password" style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />

      <button
        onClick={generateStaffID}
        style={{ padding: "10px", background: "#000", color: "white", border: "none", cursor: "pointer", marginBottom: "10px" }}
      >
        Generate Staff ID & QR
      </button>

      {staffID && <p><strong>Staff ID:</strong> {staffID}</p>}
      {qrCode && <img src={qrCode} alt="QR Code" />}
    </div>
  );
}
