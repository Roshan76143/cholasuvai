"use client";

import { useState } from "react";

export default function StaffProfile() {
  const [staffList, setStaffList] = useState([
    { id: "CS101", name: "Praveen Kumar", phone: "9876543210", join: "01-11-2025", role: "Staff", qr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CS101" },
    { id: "CS102", name: "Anitha R", phone: "9123456780", join: "05-11-2025", role: "Staff", qr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CS102" }
  ]);

  const handleDelete = (id) => setStaffList(staffList.filter(s => s.id !== id));

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Staff Profile</h1>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Employee ID</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Phone</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Joining Date</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Role</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>QR Code</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {staffList.map(s => (
            <tr key={s.id}>
              <td style={{ border: "1px solid #000", padding: "8px" }}>{s.id}</td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>{s.name}</td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>{s.phone}</td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>{s.join}</td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>{s.role}</td>
              <td style={{ border: "1px solid #000", padding: "8px" }}><img src={s.qr} alt="QR Code" /></td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                <button onClick={() => handleDelete(s.id)} style={{ padding: "5px", background: "red", color: "white", border: "none" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
