"use client";

import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Chola Suvai Admin Dashboard</h1>

      <h2>Quick Links</h2>
      <ul>
        <li><Link href="/admin/add-staff">Add Staff</Link></li>
        <li><Link href="/admin/add-product">Add Product</Link></li>
        <li><Link href="/admin/stock">Stock / Inventory</Link></li>
        <li><Link href="/admin/invoice">Create Invoice</Link></li>
        <li><Link href="/admin/orders">Orders & Expenses</Link></li>
        <li><Link href="/admin/staff-profile">Staff Profiles</Link></li>
      </ul>

      <h2>Summary</h2>
      <p>Total Revenue: ₹0</p>
      <p>Total Expenses: ₹0</p>
      <p>Profit: ₹0</p>

      <h2>Settings</h2>
      <p>Update Company Info, Logo & Admin Password here.</p>
    </div>
  );
}
