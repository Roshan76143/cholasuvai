const sendWhatsApp = () => {
  if (!customerPhone) return alert("Enter customer phone");
  const message = `Hello ${customerName}, your invoice from Chola Suvai is ready. Total: ₹${totalAmount}`;
  const url = `https://wa.me/91${customerPhone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
