"use client";

export default function StaffLoginPage() {
  return (
    <div style={{
      fontFamily: "Arial",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f7f7f7"
    }}>
      <div style={{
        width: "350px",
        padding: "25px",
        borderRadius: "10px",
        background: "white",
        boxShadow: "0 0 10px rgba(0,0,0,0.15)"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Staff Login
        </h2>

        <label>Staff ID</label>
        <input
          type="text"
          placeholder="Enter Staff ID"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        <button style={{
          width: "100%",
          padding: "10px",
          background: "#008000",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Login
        </button>
      </div>
    </div>
  );
}
