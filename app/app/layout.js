export const metadata = {
  title: "Chola Suvai",
  description: "Traditional Organic Foods Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
