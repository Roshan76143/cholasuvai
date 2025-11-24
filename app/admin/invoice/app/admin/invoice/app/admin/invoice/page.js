const [invoiceType, setInvoiceType] = useState("Retail");
<label>Invoice Type</label>
<select value={invoiceType} onChange={e => setInvoiceType(e.target.value)} style={{ width: "100%", marginBottom: "10px", padding: "8px" }}>
  <option>Retail</option>
  <option>Wholesale</option>
</select>
<p><strong>Invoice Type:</strong> {invoiceType}</p>
<p>Payment Mode: {invoiceType === "Retail" ? "Online Only" : "Online / Offline"}</p>
